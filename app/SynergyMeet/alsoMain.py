from rake_nltk import Rake

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


from moviepy.editor import VideoFileClip
import os
from deepface import DeepFace
import cv2
import numpy as np
import matplotlib.pyplot as plt
from transformers import pipeline
from speechbrain.pretrained.interfaces import foreign_class

from transformers import (
    Text2TextGenerationPipeline,
    AutoModelForSeq2SeqLM,
    AutoTokenizer,
)

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')
detector_params = cv2.SimpleBlobDetector_Params()
detector_params.filterByArea = True
detector_params.maxArea = 1500
detector = cv2.SimpleBlobDetector_create(detector_params)

def detect_faces(img, classifier):
    gray_frame = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    coords = classifier.detectMultiScale(gray_frame, 1.3, 5)
    if len(coords) > 1:
        biggest = (0, 0, 0, 0)
        for i in coords:
            if i[3] > biggest[3]:
                biggest = i
        biggest = np.array([i], np.int32)
    elif len(coords) == 1:
        biggest = coords
    else:
        return None
    for (x, y, w, h) in biggest:
        frame = img[y:y + h, x:x + w]
    return frame

def detect_eyes(image, classifier):
    gray_frame = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    eyes = classifier.detectMultiScale(gray_frame, 1.3, 5) # detect eyes
    width = np.size(image, 1) # get face frame width
    height = np.size(image, 0) # get face frame height
    left_eye = None
    right_eye = None
    for (x, y, w, h) in eyes:
        if y > height / 2:
            pass
        eyecenter = x + w / 2  # get the eye center
        if eyecenter < width * 0.5:
            left_eye = image[y:y + h, x:x + w]
        else:
            right_eye = image[y:y + h, x:x + w]
    return left_eye, right_eye

def cut_eyebrows(img):
    height, width = img.shape[:2]
    eyebrow_h = int(height / 4)
    img = img[eyebrow_h:height, 0:width]  # cut eyebrows out (15 px)
    return img

def blob_process(img, detector):
    gray_frame = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, img = cv2.threshold(gray_frame, 50, 255, cv2.THRESH_BINARY)
    img = cv2.erode(img, None, iterations=2) #1
    img = cv2.dilate(img, None, iterations=4) #2
    img = cv2.medianBlur(img, 5) #3
    keypoints = detector.detect(img)
    return keypoints

def blob_process(img, threshold, detector):
    gray_frame = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, img = cv2.threshold(gray_frame, threshold, 255, cv2.THRESH_BINARY)
    img = cv2.erode(img, None, iterations=2)
    img = cv2.dilate(img, None, iterations=4)
    img = cv2.medianBlur(img, 5)
    keypoints = detector.detect(img)
    return keypoints

def calculate_average_keypoint_movement(keypoints_list):
    # Initialize variables to store movement information
    prev_keypoints = None
    total_movement = 0.0  # Total movement of keypoints across frames

    for keypoints in keypoints_list:
        if prev_keypoints is not None:
            for kp1, kp2 in zip(prev_keypoints, keypoints):
                # Calculate the Euclidean distance between corresponding keypoints
                movement = np.linalg.norm(np.array(kp1.pt) - np.array(kp2.pt))
                total_movement += movement
        prev_keypoints = keypoints

    # Calculate the average movement across frames
    average_movement = total_movement / len(keypoints_list)

    return average_movement

def main():
    y = []
    cap = cv2.VideoCapture("face_eye.mp4")
    while True:
        ret, frame = cap.read()
        if ret:
            face_frame = detect_faces(frame, face_cascade)
            if face_frame is not None:
                eyes = detect_eyes(face_frame, eye_cascade)
                for eye in eyes:
                    if eye is not None:
                        eye = cut_eyebrows(eye)
                        keypoints = blob_process(eye, 50, detector)
                        y.append(keypoints)
                        eye = cv2.drawKeypoints(eye, keypoints, eye, (0, 0, 255), cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
        else:
            break
    cap.release()
    cv2.destroyAllWindows()
    y = [kp_list for kp_list in y if kp_list]
    # Calculate average movement of keypoints
    average_movement = calculate_average_keypoint_movement(y)
    print("Average Keypoint Movement:", average_movement)

def main_s():
    y = []
    cap = cv2.VideoCapture(0)
    cv2.namedWindow('image')
    cv2.createTrackbar('threshold', 'image', 0, 255, lambda x: x)
    while True:
        _, frame = cap.read()
        face_frame = detect_faces(frame, face_cascade)
        if face_frame is not None:
            eyes = detect_eyes(face_frame, eye_cascade)
            for eye in eyes:
                if eye is not None:
                    threshold = cv2.getTrackbarPos('threshold', 'image')
                    eye = cut_eyebrows(eye)
                    keypoints = blob_process(eye, threshold, detector)
                    y.append(keypoints)
                    eye = cv2.drawKeypoints(eye, keypoints, eye, (0, 0, 255), cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
        cv2.imshow('image', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
    y = [kp_list for kp_list in y if kp_list]
    print(y)
    print("Average Keypoint Movement:", calculate_average_keypoint_movement(y))

class KeyphraseGenerationPipeline(Text2TextGenerationPipeline):
    def __init__(self, model, keyphrase_sep_token=";", *args, **kwargs):
        super().__init__(
            model=AutoModelForSeq2SeqLM.from_pretrained(model),
            tokenizer=AutoTokenizer.from_pretrained(model),
            *args,
            **kwargs
        )
        self.keyphrase_sep_token = keyphrase_sep_token

    def postprocess(self, model_outputs):
        results = super().postprocess(
            model_outputs=model_outputs
        )
        return [[keyphrase.strip() for keyphrase in result.get("generated_text").split(self.keyphrase_sep_token) if keyphrase != ""] for result in results]

def key_phrase_repetition(text):
    arr = []
    r = Rake()
    r.extract_keywords_from_text(text)
    for rating, keyword in r.get_ranked_phrases_with_scores():
        if rating > 5:
            arr.append((rating,keyword))
    return arr
    
def key_phrase_extraction(text):
    model_name = "ml6team/keyphrase-generation-t5-small-inspec"
    generator = KeyphraseGenerationPipeline(model=model_name)
    keyphrases = generator(text)
    return keyphrases

def detect_emotion(video_path):
    list_of_emotions = []
    video = cv2.VideoCapture(video_path)
    frame_rate = video.get(cv2.CAP_PROP_FPS)
    frame_no = 0
    while(True):
        ret,frame = video.read()
        if ret:
            try:
                if frame_no%(frame_rate/2) == 0:
                    result = DeepFace.analyze(frame, actions = ['emotion'])
                    #print(result[0]['emotion']['angry'])
                    negative = result[0]['emotion']['sad'] + result[0]['emotion']['disgust'] + result[0]['emotion']['fear'] + result[0]['emotion']['angry']
                    positive = result[0]['emotion']['happy'] + result[0]['emotion']['neutral'] + result[0]['emotion']['surprise']
                    list_of_emotions.append([negative,positive])
                    #list_of_emotions.append(result)
            except:
                pass
        else:
            break
        frame_no += 1
    return list_of_emotions

def speech_to_text(audio_path):
    whisper = pipeline("automatic-speech-recognition", model = 'openai/whisper-medium',framework="pt", device="cpu")

    text = whisper(audio_path)
    return text

def text_to_summary(text):
    summarizer = pipeline('summarization',model='t5-base',tokenizer='t5-base',framework = 'tf')
    
    max_chunk = 512
    
    text = text.replace('.', '.<eos>')
    text = text.replace('?', '?<eos>')
    text = text.replace('!', '!<eos>')

    sentences = text.split('<eos>')
    current_chunk = 0 
    chunks = []
    for sentence in sentences:
        if len(chunks) == current_chunk + 1: 
            if len(chunks[current_chunk]) + len(sentence.split(' ')) <= max_chunk:
                chunks[current_chunk].extend(sentence.split(' '))
            else:
                current_chunk += 1
                chunks.append(sentence.split(' '))
        else:
            #print(current_chunk)
            chunks.append(sentence.split(' '))

    for chunk_id in range(len(chunks)):
        chunks[chunk_id] = ' '.join(chunks[chunk_id])

    res = summarizer(chunks, max_length=120, min_length=30, do_sample=False)

    result = ' '.join([summ['summary_text'] for summ in res])
    return result

def voice_tone(url):
     classifier = foreign_class(source="speechbrain/emotion-recognition-wav2vec2-IEMOCAP", pymodule_file="custom_interface.py", classname="CustomEncoderWav2vec2Classifier")
     out_prob, score, index, text_lab = classifier.classify_file(url)
     return text_lab[0]

def convert_video_to_audio_moviepy(video_file, output_ext="mp3"):
    filename, ext = os.path.splitext(video_file)
    clip = VideoFileClip(video_file)
    clip.audio.write_audiofile(f"{filename}.{output_ext}")

def calculate_content_relevance(query, documents):
    all_text = [query] + documents

    tfidf_vectorizer = TfidfVectorizer()

    tfidf_matrix = tfidf_vectorizer.fit_transform(all_text)
    query_vector = tfidf_matrix[0]  
    document_vectors = tfidf_matrix[1:] 
    cosine_scores = cosine_similarity(query_vector, document_vectors)
    relevance_scores = cosine_scores[0]
    return relevance_scores


if __name__ == "__main__":
    x = input("Enter task : ")
    if x == 'v':
        video_path = "emote.mp4"
        emotions = detect_emotion(video_path)
        positive = 0
        negative = 0
        print(emotions)
        for i in emotions:
            positive += i[1]
            negative += i[0]
        print("Positive : ",(positive*100)/(positive+negative))
        print('Negative : ',(negative*100)/(positive+negative))
    elif x == 'a':
        audio_path = "blackmail.wav"
        x = speech_to_text(audio_path)
        print(x)
    elif x == 'at':
         audio_path = "blackmail.wav"
         res = voice_tone(audio_path)
         print(res)
    elif x == 's':
        f = open('material.txt','r',encoding='utf-8')
        print(text_to_summary(f.read()))
        f.close()
    elif x == 'k':
        f = open('material2.txt','r',encoding='utf-8')
        y = key_phrase_extraction(f.read())
        f.close()
        print(y)
    elif x == 'kr':
        f = open('material2.txt','r',encoding='utf-8')
        y = key_phrase_repetition(f.read())
        f.close()
        print(y)
    elif x == 'atv':
        vf = 'deezed.mp4'
        af = 'deezed.mp3'
        convert_video_to_audio_moviepy(vf)
        print(speech_to_text(vf))
    elif x == 'cr':
        f = open('material2.txt','r',encoding='utf-8')
        query = "Harmful and negative effects of tobacco products on people and society as a whole"
        documents = [f.read()]
        
        relevance_scores = calculate_content_relevance(query, documents)
        for i, score in enumerate(relevance_scores):
            print(f"Content relevance score of text and query : {i + 1}: {score}")
    elif x == 'i':
        main()
    elif x == 'iw':
        main_s()
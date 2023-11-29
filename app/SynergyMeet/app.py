
from flask import Flask, jsonify,request
from transformers import BartForConditionalGeneration, BartTokenizer
# from sumy.summarizers.lsa import LsaSummarizer
# from sumy.nlp.tokenizers import Tokenizer
# from sumy.parsers.plaintext import PlaintextParser
app = Flask(__name__)
from rake_nltk import Rake

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


from moviepy.editor import VideoFileClip
import os
from deepface import DeepFace
import cv2
import numpy as np
import openai
import matplotlib.pyplot as plt
from transformers import pipeline
from speechbrain.pretrained.interfaces import foreign_class

from transformers import (
    Text2TextGenerationPipeline,
    AutoModelForSeq2SeqLM,
    AutoTokenizer,
)

eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')
detector_params = cv2.SimpleBlobDetector_Params()
detector_params.filterByArea = True
detector_params.maxArea = 1500
detector = cv2.SimpleBlobDetector_create(detector_params)

model_name = "facebook/bart-large-cnn"
model = BartForConditionalGeneration.from_pretrained(model_name)
tokenizer = BartTokenizer.from_pretrained(model_name)
api_key = "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"

def test():
    import boto3
    import cv2
    import numpy as np
    from io import BytesIO
    
    a = []

    # AWS credentials and S3 bucket information
    aws_access_key_id = 'AKIAVL5OPP5WWB4Q4B7L'
    aws_secret_access_key = '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'
    region_name = 'ap-southeast-1'
    bucket_name = 'synergymeet'
    file_key = 'D:/inlustroo/inlustro/app/SynergyMeet/emote.mp4'
    try:

    # Create an S3 client
        s3 = boto3.client('s3', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key, region_name=region_name)

        # Read the video file from S3
        response = s3.get_object(Bucket=bucket_name, Key=file_key)
        video_bytes = response['Body'].read()
        print("Length of video_bytes:", len(video_bytes))
        print(cv2.__version__)

      # Convert video_bytes to a NumPy array
        video_np_array = np.frombuffer(video_bytes, np.uint8)
        print(video_np_array)

        # Use cv2.VideoCapture to load the video
        video_capture = cv2.VideoCapture()
        video_capture.open(file_key, cv2.CAP_FFMPEG)

        # Check if the video capture is successful
        if not video_capture.isOpened():
            raise Exception("Error opening video file")

        # Read the first frame to get dimensions
        _, frame = video_capture.read()

        print(frame)
        height, width, _ = frame.shape

        # Create a VideoWriter for saving the video locally
        video_writer = cv2.VideoWriter("test.mp4", cv2.VideoWriter_fourcc(*'mp4v'), 30, (width, height))
        print(video_writer)
        # Write the first frame
        video_writer.write(frame)

        # Loop through the remaining frames and write to the VideoWriter
        while True:
            ret, frame = video_capture.read()
            if not ret:
                break
            print(ret)
            x = detect_emotion_from_img(frame)
            a.append(x)
            # print(frame)

            # video_writer.write(frame)

        # Release resources
        video_capture.release()
        video_writer.release()

        print("Video loaded and written successfully!")
        return a  # Returning the last frame for demonstration purposes

    except Exception as e:
        print("An error occurred:", e)
        return None

# Call the test function
result = test() 
                          
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

def key_phrase_repetition(text):
    arr = []
    r = Rake()
    r.extract_keywords_from_text(text)
    for rating, keyword in r.get_ranked_phrases_with_scores():
        if rating > 5:
            arr.append((rating,keyword))
    return arr

def detect_emotion_from_img(img):
    try:
        result = DeepFace.analyze(img, actions = ['emotion'])
        #print(result[0]['emotion']['angry'])
        negative = result[0]['emotion']['sad'] + result[0]['emotion']['disgust'] + result[0]['emotion']['fear'] + result[0]['emotion']['angry']
        positive = result[0]['emotion']['happy'] + result[0]['emotion']['neutral'] + result[0]['emotion']['surprise']
        return [negative,positive]
    except:
        return [0,0]

def speech_to_text(audio_path):
    whisper = pipeline("automatic-speech-recognition", model = 'openai/whisper-medium',framework="pt", device="cpu")

    text = whisper(audio_path)
    return text

# def text_to_summary(text):
#     summarizer = pipeline('summarization',model='t5-base',tokenizer='t5-base',framework = 'tf')
    
#     max_chunk = 512
    
#     text = text.replace('.', '.<eos>')
#     text = text.replace('?', '?<eos>')
#     text = text.replace('!', '!<eos>')

#     sentences = text.split('<eos>')
#     current_chunk = 0 
#     chunks = []
#     for sentence in sentences:
#         if len(chunks) == current_chunk + 1: 
#             if len(chunks[current_chunk]) + len(sentence.split(' ')) <= max_chunk:
#                 chunks[current_chunk].extend(sentence.split(' '))
#             else:
#                 current_chunk += 1
#                 chunks.append(sentence.split(' '))
#         else:
#             #print(current_chunk)
#             chunks.append(sentence.split(' '))

#     for chunk_id in range(len(chunks)):
#         chunks[chunk_id] = ' '.join(chunks[chunk_id])

#     res = summarizer(chunks, max_length=120, min_length=30, do_sample=False)

#     result = ' '.join([summ['summary_text'] for summ in res])
#     return result

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


def summarize(data, max_tokens=150):
    response = openai.Completion.create(
       engine="text-davinci-002",
        prompt=data,
        max_tokens=max_tokens,  
         api_key=api_key
    )

    
    summary = response.choices[0].text.strip()
    return summary
# text_to_summarize = ""
# cleaned_text_to_summarize = text_to_summarize.replace("\n", " ")
# result = summarize(cleaned_text_to_summarize, max_tokens=1000)
# print(result)
# def summarize(data,max_length=1000):

#     inputs = tokenizer(data, return_tensors="pt", max_length=max_length, truncation=True)
#     summary_ids = model.generate(inputs["input_ids"], max_length=max_length, num_beams=4, length_penalty=2.0, early_stopping=True)
#     summarized_text = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
#     return summarized_text
# Route for text summarization
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        # Get the text to be summarized from the request body
        
        data = request.get_json()
        _modelType = data.get('_modelType')
        _data = data.get('_data')
        if _modelType == 'SUM':
            return jsonify({'summarized_text': summarize(_data)})
        # else:
        #     return jsonify({'error': 'Invalid model type'})
        
        elif _modelType == 'FACE':

            try:
                loaded_image = test()
                if loaded_image is None:
                    return jsonify({'error': 'Error loading image'})
                #app.logger.info("Loaded Image: %s", loaded_image)

                #print("Loaded Image:", loaded_image)
                
                
                #emotions = detect_emotion(loaded_image)
                positive = 0
                negative = 0
                print(loaded_image)
                for i in loaded_image:
                    positive += i[1]
                    negative += i[0]
                print("Positive : ", (positive*100)/(positive+negative))
                print('Negative : ', (negative*100)/(positive+negative))

                #detected_face = detect_faces(loaded_image, face_cascade)

                return jsonify({
                    'positive_percentage': (positive*100)/(positive+negative),
                    'negative_percentage': (negative*100)/(positive+negative),
                })
   
            except Exception as e:
                print("An error occurred:", e)
                return jsonify({'error': 'An error occurred during processing'})

        elif _modelType=='VOICE':
            
            return voice_tone(data)
        elif _modelType== 'DETECTFACE':
            return detect_faces(data)
        # elif _modelType=='DETECTEMO':
        #     return detect_emotion(data)
        elif _modelType=='CUTEYE':
            return cut_eyebrows(data)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()
    
   





























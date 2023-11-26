# from rake_nltk import Rake

# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity

# from moviepy.editor import VideoFileClip
# import os
# import json
# import sys
# from deepface import DeepFace
# import cv2
# import numpy as np
# import matplotlib.pyplot as plt
# from transformers import pipeline
# # from speechbrain.pretrained.interfaces import foreign_class
# from transformers import (
#     Text2TextGenerationPipeline,
#     AutoModelForSeq2SeqLM,
#     AutoTokenizer,
# )

# face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
# eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')
# detector_params = cv2.SimpleBlobDetector_Params()
# detector_params.filterByArea = True
# detector_params.maxArea = 1500
# detector = cv2.SimpleBlobDetector_create(detector_params)

# def detect_emotion(video_path):
#     list_of_emotions = []
#     video = cv2.VideoCapture(video_path)
#     frame_rate = video.get(cv2.CAP_PROP_FPS)
#     frame_no = 0
#     while(True):
#         ret,frame = video.read()
#         if ret:
#             try:
#                 if frame_no%(frame_rate/2) == 0:
#                     result = DeepFace.analyze(frame, actions = ['emotion'])
#                     #print(result[0]['emotion']['angry'])
#                     negative = result[0]['emotion']['sad'] + result[0]['emotion']['disgust'] + result[0]['emotion']['fear'] + result[0]['emotion']['angry']
#                     positive = result[0]['emotion']['happy'] + result[0]['emotion']['neutral'] + result[0]['emotion']['surprise']
#                     list_of_emotions.append([negative,positive])
#                     #list_of_emotions.append(result)
#             except:
#                 pass
#         else:
#             break
#         frame_no += 1
#     return list_of_emotions

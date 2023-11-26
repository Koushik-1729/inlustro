import express from 'express';
import {
  createSpeakerRecognition,
  updateSpeakerRecognition,
  deleteSpeakerRecognition,
  getAllSpeakerRecognitions,
  getSpeakerRecognitionById,
} from '../controllers/SpeakerRecognitionController.mjs'; 
const router = express.Router();
router.post('/speakerrecognitions', createSpeakerRecognition);
router.put('/speakerrecognitions/:SpeakerRecognitionID', updateSpeakerRecognition);
router.delete('/speakerrecognitions/:SpeakerRecognitionID', deleteSpeakerRecognition);
router.get('/speakerrecognitions', getAllSpeakerRecognitions);
router.get('/speakerrecognitions/:SpeakerRecognitionID', getSpeakerRecognitionById);
export default router;

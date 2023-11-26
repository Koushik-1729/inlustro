import express from 'express';
import {
  createDiscussionTopic,
  updateDiscussionTopic,
  deleteDiscussionTopic,
  getAllDiscussionTopics,
  getDiscussionTopicById,
} from '../controllers/DiscussionTopicController.mjs'; 

const router = express.Router();
router.post('/discussiontopics', createDiscussionTopic);
router.put('/discussiontopics/:DiscussionTopicID', updateDiscussionTopic);
router.delete('/discussiontopics/:DiscussionTopicID', deleteDiscussionTopic);
router.get('/Sdiscussiontopics', getAllDiscussionTopics);
router.get('/discussiontopics/:DiscussionTopicID', getDiscussionTopicById);

export default router;

<<<<<<< HEAD
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
=======
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
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

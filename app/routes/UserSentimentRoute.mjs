<<<<<<< HEAD
import express from 'express';
import {
  createUserSentiment,
  getAllUserSentiments,
  getUserSentimentById,
  updateUserSentiment,
  deleteUserSentiment,
} from '../controllers/UserSentimentController.mjs';

const router = express.Router();
router.post('/usersentiments', createUserSentiment);
router.get('/usersentiments', getAllUserSentiments);
router.get('/usersentiments/:userSentimentId', getUserSentimentById);
router.put('/usersentiments/:userSentimentId', updateUserSentiment);
router.delete('/usersentiments/:userSentimentId', deleteUserSentiment);
export default router;
=======
import express from 'express';
import {
  createUserSentiment,
  getAllUserSentiments,
  getUserSentimentById,
  updateUserSentiment,
  deleteUserSentiment,
} from '../controllers/UserSentimentController.mjs';

const router = express.Router();
router.post('/usersentiments', createUserSentiment);
router.get('/usersentiments', getAllUserSentiments);
router.get('/usersentiments/:userSentimentId', getUserSentimentById);
router.put('/usersentiments/:userSentimentId', updateUserSentiment);
router.delete('/usersentiments/:userSentimentId', deleteUserSentiment);
export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

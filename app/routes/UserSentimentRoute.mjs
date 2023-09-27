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

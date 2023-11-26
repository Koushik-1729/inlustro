import express from 'express';
import {
  createDiscussionPoint,
  updateDiscussionPoint,
  deleteDiscussionPoint,
  getAllDiscussionPoints,
  getDiscussionPointById,
} from '../controllers/DiscussionPointController.mjs';
const router = express.Router();
router.post('/discussionpoints', createDiscussionPoint);
router.put('/discussionpoints/:DiscussionPointID', updateDiscussionPoint);
router.delete('/discussionpoints/:DiscussionPointID', deleteDiscussionPoint);
router.get('/discussionpoints', getAllDiscussionPoints);
router.get('/discussionpoints/:DiscussionPointID', getDiscussionPointById);
export default router;

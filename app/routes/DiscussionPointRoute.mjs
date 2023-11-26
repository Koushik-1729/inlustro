<<<<<<< HEAD
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
=======
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
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

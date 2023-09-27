import express from 'express';
import {
  createPostMeetingReport,
  updatePostMeetingReport,
  deletePostMeetingReport,
  getAllPostMeetingReports,
  getPostMeetingReportById,
} from '../controllers/PostMeetingReport.mjs'; 

const router = express.Router();
router.post('/postmeetingreports', createPostMeetingReport);
router.put('/postmeetingreports/:PostMeetingReportID', updatePostMeetingReport);
router.delete('/postmeetingreports/:PostMeetingReportID', deletePostMeetingReport);

router.get('/postmeetingreports', getAllPostMeetingReports);
router.get('/postmeetingreports/:PostMeetingReportID', getPostMeetingReportById);

export default router;

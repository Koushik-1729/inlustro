import express from 'express';
import {
  createMeetingAnalytics,
  updateMeetingAnalytics,
  deleteMeetingAnalytics,
  getAllMeetingAnalytics,
  getMeetingAnalyticsById,
} from '../controllers/MeetingAnalyticsController.mjs'; 

const router = express.Router();
router.post('/meetinganalytics', createMeetingAnalytics);
router.put('/meetinganalytics/:MeetingAnalyticsID', updateMeetingAnalytics);
router.delete('/meetinganalytics/:MeetingAnalyticsID', deleteMeetingAnalytics);
router.get('/meetinganalytics', getAllMeetingAnalytics);
router.get('/meetinganalytics/:MeetingAnalyticsID', getMeetingAnalyticsById);

export default router;

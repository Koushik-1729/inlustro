<<<<<<< HEAD
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
=======
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
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

<<<<<<< HEAD
import express from 'express';

import {registerMeeting,
  updateMeeting,
  getAllMeetings,
  getMeetingById,
  deleteMeetingById,

} from '../controllers/MeetingController.mjs';
const router =express.Router();
router.post('/register', registerMeeting);
router.put('/meetings/:MeetingId', updateMeeting);
router.get('/meetings', getAllMeetings);
router.get('/meetings/:MeetingId', getMeetingById);
router.delete('/meetings/:MeetingId', deleteMeetingById);

export default router;
=======
import express from 'express';

import {registerMeeting,
  updateMeeting,
  getAllMeetings,
  getMeetingById,
  deleteMeetingById,

} from '../controllers/MeetingController.mjs';
const router =express.Router();
router.post('/register', registerMeeting);
router.put('/meetings/:MeetingId', updateMeeting);
router.get('/meetings', getAllMeetings);
router.get('/meetings/:MeetingId', getMeetingById);
router.delete('/meetings/:MeetingId', deleteMeetingById);

export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

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

import express from 'express';
import {
  createUserMeetingRole,
  getUserMeetingRolesForMeeting,
  getUserMeetingRoleById,
  updateUserMeetingRole,
  deleteUserMeetingRole,
} from '../controllers/UserMeetingRoleController.mjs'; // Replace with your actual controller file

const router = express.Router();


router.post('/usermeetingroles', createUserMeetingRole);
router.get('/usermeetingroles/meeting/:meetingId', getUserMeetingRolesForMeeting);
router.get('/usermeetingroles/:userMeetingRoleId', getUserMeetingRoleById);
router.put('/usermeetingroles/:userMeetingRoleId', updateUserMeetingRole);
router.delete('/usermeetingroles/:userMeetingRoleId', deleteUserMeetingRole);

export default router;

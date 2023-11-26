<<<<<<< HEAD
import express from 'express';
import {
  createUserProjectMeetingRole,
  getUserProjectMeetingRolesForProjectAndMeeting,
  getUserProjectMeetingRoleById,
  updateUserProjectMeetingRole,
  deleteUserProjectMeetingRole,
} from '../controllers/UserProjectMeetingRoleController.mjs'; 
const router = express.Router();
router.post('/userprojectmeeting-roles', createUserProjectMeetingRole);
router.get('/:userProjectMeetingRoleId',getUserProjectMeetingRoleById);
router.get('/', getUserProjectMeetingRolesForProjectAndMeeting);
router.put('/userprojectmeetingroles/:userProjectMeetingRoleId', updateUserProjectMeetingRole);
router.delete('/userprojectmeetingroles/:userProjectMeetingRoleId', deleteUserProjectMeetingRole);

export default router;
=======
import express from 'express';
import {
  createUserProjectMeetingRole,
  getUserProjectMeetingRolesForProjectAndMeeting,
  getUserProjectMeetingRoleById,
  updateUserProjectMeetingRole,
  deleteUserProjectMeetingRole,
} from '../controllers/UserProjectMeetingRoleController.mjs'; 
const router = express.Router();
router.post('/userprojectmeeting-roles', createUserProjectMeetingRole);
router.get('/:userProjectMeetingRoleId',getUserProjectMeetingRoleById);
router.get('/', getUserProjectMeetingRolesForProjectAndMeeting);
router.put('/userprojectmeetingroles/:userProjectMeetingRoleId', updateUserProjectMeetingRole);
router.delete('/userprojectmeetingroles/:userProjectMeetingRoleId', deleteUserProjectMeetingRole);

export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

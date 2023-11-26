<<<<<<< HEAD
import express from 'express';
import {
  createUserZoneMeetingRole,
  getUserZoneMeetingRolesForZoneAndMeeting,
  getUserZoneMeetingRoleById,
  updateUserZoneMeetingRole,
  deleteUserZoneMeetingRole,
} from '../controllers/UserZoneRoleController.mjs';

const router = express.Router();
router.post('/userzonemeetingroles', createUserZoneMeetingRole);
router.get('/userzonemeetingroles/:zoneId/:meetingId', getUserZoneMeetingRolesForZoneAndMeeting);
router.get('/userzonemeetingroles/:userZoneMeetingRoleId', getUserZoneMeetingRoleById);
router.put('/userzonemeetingroles/:userZoneMeetingRoleId', updateUserZoneMeetingRole);
router.delete('/userzonemeetingroles/:userZoneMeetingRoleId', deleteUserZoneMeetingRole);
export default router;
=======
import express from 'express';
import {
  createUserZoneMeetingRole,
  getUserZoneMeetingRolesForZoneAndMeeting,
  getUserZoneMeetingRoleById,
  updateUserZoneMeetingRole,
  deleteUserZoneMeetingRole,
} from '../controllers/UserZoneRoleController.mjs';

const router = express.Router();
router.post('/userzonemeetingroles', createUserZoneMeetingRole);
router.get('/userzonemeetingroles/:zoneId/:meetingId', getUserZoneMeetingRolesForZoneAndMeeting);
router.get('/userzonemeetingroles/:userZoneMeetingRoleId', getUserZoneMeetingRoleById);
router.put('/userzonemeetingroles/:userZoneMeetingRoleId', updateUserZoneMeetingRole);
router.delete('/userzonemeetingroles/:userZoneMeetingRoleId', deleteUserZoneMeetingRole);
export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

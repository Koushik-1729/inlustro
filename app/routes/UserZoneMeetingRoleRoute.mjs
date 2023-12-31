import express from 'express';
import {
  createUserZoneMeetingRole,
  getAllUserZoneMeetingRoles,
  getUserZoneMeetingRoleById,
  updateUserZoneMeetingRole,
  deleteUserZoneMeetingRole,
} from '../controllers/UserZoneMeetingRoleController.mjs';

const router = express.Router();
router.post('/userzonemeetingroles', createUserZoneMeetingRole);
router.get('/userzonemeetingroles', getAllUserZoneMeetingRoles);
router.get('/userzonemeetingroles/:userZoneMeetingRoleId', getUserZoneMeetingRoleById);
router.put('/userzonemeetingroles/:userZoneMeetingRoleId', updateUserZoneMeetingRole);
router.delete('/userzonemeetingroles/:userZoneMeetingRoleId', deleteUserZoneMeetingRole);
export default router;

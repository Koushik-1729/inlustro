import express from 'express';
import { UserProjectZoneMeetingRole } from '../schema/Schemas.mjs';
import {
  getAllUserProjectZoneMeetingRoles,
  getUserProjectZoneMeetingRoleById,
  createUserProjectZoneMeetingRole,
  updateUserProjectZoneMeetingRoleById,
  deleteUserProjectZoneMeetingRoleById
} from '../controllers/UserProjectZoneMeetingRoleController.mjs';

const router = express.Router();

router.get('/', getAllUserProjectZoneMeetingRoles);
router.get('/:userProjectZoneRoleId', getUserProjectZoneMeetingRoleById);
router.post('/', createUserProjectZoneMeetingRole);
router.put('/:userProjectZoneRoleId', updateUserProjectZoneMeetingRoleById);
router.delete('/:userProjectZoneRoleId', deleteUserProjectZoneMeetingRoleById);

export default router;

import express from 'express';
import { UserProjectZoneRole } from '../schema/Schemas.mjs';

import {registerUserProjectZoneRole,
  updateUserProjectZoneRole,
  getAllUserProjectZoneRoles,
  getUserProjectZoneRoleById,
  deleteUserProjectZoneRoleById,

} from '../controllers/UserProjectZoneRoleController.mjs';
const router =express.Router();
router.post('/register', registerUserProjectZoneRole);
router.put('userprojectzoneroles/:UserProjectZoneRoleId', updateUserProjectZoneRole);
router.get('userprojectzoneroles/', getAllUserProjectZoneRoles);
router.get('userprojectzoneroles/:UserProjectZoneRoleId', getUserProjectZoneRoleById);
router.delete('userprojectzoneroles/:UserProjectZoneRoleId', deleteUserProjectZoneRoleById);

export default router;


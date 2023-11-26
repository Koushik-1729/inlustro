import express from 'express';
import { UserProjectZoneRole } from '../schema/Schemas.mjs';
import {
  getAllUserProjectZoneRoles,
  deleteUserProjectZoneRoleById,
  updateUserProjectZoneRoleById,
  createUserProjectZoneRole,
  getUserProjectZoneRoleById
} from '../controllers/UserProjectZoneRoleController.mjs';

const router = express.Router();

router.get('/',getAllUserProjectZoneRoles);
router.get('/:userProjectZoneRoleId', getUserProjectZoneRoleById);
router.post('/', createUserProjectZoneRole);
router.put('/:userProjectZoneRoleId', updateUserProjectZoneRoleById);
router.delete('/:userProjectZoneRoleId', deleteUserProjectZoneRoleById);

export default router;

import express from 'express';
import {
  createUserTeamRole,
  getAllUserTeamRoles,
  getUserTeamRoleById,
  updateUserTeamRole,
  deleteUserTeamRole,
} from '../controllers/UserTeamRoleController.mjs'; 

const router = express.Router();
router.post('/userteamroles', createUserTeamRole);
router.get('/userteamroles', getAllUserTeamRoles);
router.get('/userteamroles/:userTeamRoleId', getUserTeamRoleById);
router.put('/userteamroles/:userTeamRoleId', updateUserTeamRole);
router.delete('/userteamroles/:userTeamRoleId', deleteUserTeamRole);
export default router;

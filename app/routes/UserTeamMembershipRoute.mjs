import express from 'express';

import {registerUserTeamMembership,
  updateUserTeamMembership,
  getAllUserTeamMemberships,
  getUserTeamMembershipById,
  deleteUserTeamMembershipById,

} from '../controllers/UserTeamMembershipController.mjs';
const router =express.Router();
router.post('/register', registerUserTeamMembership);
router.put('/userteammemberships/:UserTeamMembershipId', updateUserTeamMembership);
router.get('/userteammemberships', getAllUserTeamMemberships);
router.get('/userteammemberships/:UserTeamMembershipId', getUserTeamMembershipById);
router.delete('/userteammemberships/:UserTeamMembershipId', deleteUserTeamMembershipById);

export default router;

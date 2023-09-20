import express from 'express';
import { UserTeamMembership } from '../schema/Schemas.mjs';

import {registerUserTeamMembership,
  updateUserTeamMembership,
  getAllUserTeamMembership,
  getUserTeamMembershipById,
  deleteUserTeamMembershipById
} from "../controllers/UserTeamMembershipController.mjs";
const router =express.Router();
router.post('/register', registerUserTeamMembership);
router.put('/userteammemberships/:UserTeamMembershipID', updateUserTeamMembership);
router.get('/userteammemberships', getAllUserTeamMembership);
router.get('/userteammemberships/:UserTeamMembershipID', getUserTeamMembershipById);
router.delete('/userteammemberships/:UserTeamMembershipID',   deleteUserTeamMembershipById
);

export default router;
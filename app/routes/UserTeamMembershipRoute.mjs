import express from 'express';
<<<<<<< HEAD

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
=======
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
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80

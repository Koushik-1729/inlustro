import express from 'express';
import {
  createUserZoneMembership,
  getAllUserZoneMemberships,
  getUserZoneMembershipById,
  deleteUserZoneMembership,
} from '../controllers/UserZoneMembershipController.mjs'; 

const router = express.Router();
router.post('/userzonememberships', createUserZoneMembership);
router.get('/userzonememberships', getAllUserZoneMemberships);
router.get('/userzonememberships/:userZoneMembershipId', getUserZoneMembershipById);
router.delete('/userzonememberships/:userZoneMembershipId', deleteUserZoneMembership);
export default router;

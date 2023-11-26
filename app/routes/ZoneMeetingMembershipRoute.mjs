import express from 'express';
import {
  createZoneMeetingMembership,
  getAllZoneMeetingMemberships,
  getZoneMeetingMembershipById,
  updateZoneMeetingMembership,
  deleteZoneMeetingMembership,
} from '../controllers/ZoneMeetingMembership.mjs';
const router = express.Router();
router.post('/zonemeetingmemberships', createZoneMeetingMembership);
router.get('/zonemeetingmemberships', getAllZoneMeetingMemberships);
router.get('/zonemeetingmemberships/:zoneMeetingMembershipId', getZoneMeetingMembershipById);
router.put('/zonemeetingmemberships/:zoneMeetingMembershipId', updateZoneMeetingMembership);
router.delete('/zonemeetingmemberships/:zoneMeetingMembershipId', deleteZoneMeetingMembership);
export default router;

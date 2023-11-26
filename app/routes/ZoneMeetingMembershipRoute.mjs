<<<<<<< HEAD
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
=======
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
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

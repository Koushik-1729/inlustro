import express from 'express';
import {
  createSuggestedTimeSlot,
  getSuggestedTimeSlotsForMeeting,
  getSuggestedTimeSlotById,
  updateSuggestedTimeSlot,
  deleteSuggestedTimeSlot,
} from '../controllers/SuggestedTimeSlotController.mjs'; 
const router = express.Router();
router.post('/suggestedtimeslots', createSuggestedTimeSlot);
router.get('/suggestedtimeslots/meeting/:meetingId', getSuggestedTimeSlotsForMeeting);
router.get('/suggestedtimeslots/:timeSlotId', getSuggestedTimeSlotById);
router.put('/suggestedtimeslots/:timeSlotId', updateSuggestedTimeSlot);
router.delete('/suggested-time-slots/:timeSlotId', deleteSuggestedTimeSlot);
export default router;
import express from 'express';

import {registerParticipant,
  updateParticipant,
  getAllParticipants,
  getParticipantById,
  deleteParticipantById,

} from '../controllers/ParticipantController.mjs';
const router =express.Router();
router.post('/register', registerParticipant);
router.put('/participants/:ParticipantId', updateParticipant);
router.get('/participants', getAllParticipants);
router.get('/participants/:ParticipantId', getParticipantById);
router.delete('/participants/:ParticipantId', deleteParticipantById);

export default router;

<<<<<<< HEAD
import express from 'express';

import {registerParticipant,
  updateParticipant,
  getAllParticipants,
  getParticipantById,
  deleteParticipantById,

} from '../controllers/ParticipantController.mjs';
const router =express.Router();
router.post('/register', registerParticipant);
router.put('/:ParticipantId', updateParticipant);
router.get('/', getAllParticipants);
router.get('/:ParticipantId', getParticipantById);
router.delete('/:ParticipantId', deleteParticipantById);

export default router;
=======
import express from 'express';

import {registerParticipant,
  updateParticipant,
  getAllParticipants,
  getParticipantById,
  deleteParticipantById,

} from '../controllers/ParticipantController.mjs';
const router =express.Router();
router.post('/register', registerParticipant);
router.put('/:ParticipantId', updateParticipant);
router.get('/', getAllParticipants);
router.get('/:ParticipantId', getParticipantById);
router.delete('/:ParticipantId', deleteParticipantById);

export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

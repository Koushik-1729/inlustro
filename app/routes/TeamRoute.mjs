import express from 'express';
<<<<<<< HEAD
=======
import { Team } from '../schema/Schemas.mjs';

import {registerTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
  deleteTeamById,

} from '../controllers/TeamController.mjs';
const router =express.Router();
router.post('/register', registerTeam);
<<<<<<< HEAD
router.put('/:TeamId', updateTeam);
router.get('/', getAllTeams);
router.get('/:TeamId', getTeamById);
router.delete('/:TeamId', deleteTeamById);

export default router;


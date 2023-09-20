import express from 'express';
import { Team } from '../schema/Schemas.mjs';

import {registerTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
  deleteTeamById

} from '../controllers/TeamController.mjs';
const router =express.Router();
router.post('/register', registerTeam);
router.put('/teams/:TeamId', updateTeam);
router.get('/teams', getAllTeams);
router.get('/teams/:TeamId', getTeamById);
router.delete('/teams/:TeamId', deleteTeamById);

export default router;
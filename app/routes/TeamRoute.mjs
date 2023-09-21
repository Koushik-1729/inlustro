import express from 'express';
<<<<<<< HEAD
=======
import { Team } from '../schema/Schemas.mjs';
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80

import {registerTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
<<<<<<< HEAD
  deleteTeamById,
=======
  deleteTeamById
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80

} from '../controllers/TeamController.mjs';
const router =express.Router();
router.post('/register', registerTeam);
<<<<<<< HEAD
router.put('/:TeamId', updateTeam);
router.get('/', getAllTeams);
router.get('/:TeamId', getTeamById);
router.delete('/:TeamId', deleteTeamById);

export default router;
=======
router.put('/teams/:TeamId', updateTeam);
router.get('/teams', getAllTeams);
router.get('/teams/:TeamId', getTeamById);
router.delete('/teams/:TeamId', deleteTeamById);

export default router;
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80

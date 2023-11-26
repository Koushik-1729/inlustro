<<<<<<< HEAD
import express from 'express';

import {registerProject,
  updateProject,
  getAllProjects,
  getProjectById,
  deleteProjectById

} from '../controllers/projectcontroller.mjs';
const router =express.Router();
router.post('/register', registerProject);
router.put('/projects/:ProjectId', updateProject);
router.get('/projects', getAllProjects);
router.get('/projects/:ProjectId', getProjectById);
router.delete('/projects/:ProjectId', deleteProjectById);

export default router;
=======
import express from 'express';

import {registerProject,
  updateProject,
  getAllProjects,
  getProjectById,
  deleteProjectById

} from '../controllers/projectcontroller.mjs';
const router =express.Router();
router.post('/register', registerProject);
router.put('/projects/:ProjectId', updateProject);
router.get('/projects', getAllProjects);
router.get('/projects/:ProjectId', getProjectById);
router.delete('/projects/:ProjectId', deleteProjectById);

export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

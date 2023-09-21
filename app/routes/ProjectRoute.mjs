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

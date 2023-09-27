import express from 'express';
import {
  createUserProjectRole,
  getUserProjectRolesForProject,
  getUserProjectRoleById,
  updateUserProjectRole,
  deleteUserProjectRole,
} from '../controllers/UserProjectRoleController.mjs';
const router = express.Router();


router.post('/userprojectroles', createUserProjectRole);
router.get('/userprojectroles/:projectId', getUserProjectRolesForProject);
router.get('/userprojectroles/:userProjectRoleId', getUserProjectRoleById);
router.put('/userprojectroles/:userProjectRoleId', updateUserProjectRole);
router.delete('/userprojectroles/:userProjectRoleId', deleteUserProjectRole);

export default router;

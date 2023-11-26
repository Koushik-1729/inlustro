<<<<<<< HEAD
import express from 'express';

import {registerUserProjectMembership,
  updateUserProjectMembership,
  getAllUserProjectMemberships,
  getUserProjectMembershipById,
  deleteUserProjectMembershipById,

} from '../controllers/UserProjectMembershipController.mjs';
const router =express.Router();
router.post('/register', registerUserProjectMembership);
router.put('/userprojectmemberships/:UserProjectMembershipId', updateUserProjectMembership);
router.get('/userprojectmemberships', getAllUserProjectMemberships);
router.get('/userprojectmemberships/:UserProjectMembershipId', getUserProjectMembershipById);
router.delete('/userprojectmemberships/:UserProjectMembershipId', deleteUserProjectMembershipById);

export default router;
=======
import express from 'express';

import {registerUserProjectMembership,
  updateUserProjectMembership,
  getAllUserProjectMemberships,
  getUserProjectMembershipById,
  deleteUserProjectMembershipById,

} from '../controllers/UserProjectMembershipController.mjs';
const router =express.Router();
router.post('/register', registerUserProjectMembership);
router.put('/userprojectmemberships/:UserProjectMembershipId', updateUserProjectMembership);
router.get('/userprojectmemberships', getAllUserProjectMemberships);
router.get('/userprojectmemberships/:UserProjectMembershipId', getUserProjectMembershipById);
router.delete('/userprojectmemberships/:UserProjectMembershipId', deleteUserProjectMembershipById);

export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

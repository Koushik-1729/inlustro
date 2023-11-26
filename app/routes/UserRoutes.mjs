<<<<<<< HEAD
import express from 'express';
import {registerUser,
  authenticateUser,
  updateUser,
  changePassword,
  getAllUsers,
  getUserById,
  deleteUserById,
} from '../controllers/UserController.mjs';
const router =express.Router();
router.post('/register', registerUser);
router.post('/login', authenticateUser);
router.put('/users/:UserId', updateUser);
router.put('/users/:UserId/changePassword', changePassword);
router.get('/users', getAllUsers);
router.get('/users/:UserId', getUserById);
router.delete('/users/:UserId', deleteUserById);

=======
import express from 'express';
import {registerUser,
  authenticateUser,
  updateUser,
  changePassword,
  getAllUsers,
  getUserById,
  deleteUserById,
} from '../controllers/UserController.mjs';
const router =express.Router();
router.post('/register', registerUser);
router.post('/login', authenticateUser);
router.put('/users/:UserId', updateUser);
router.put('/users/:UserId/changePassword', changePassword);
router.get('/users', getAllUsers);
router.get('/users/:UserId', getUserById);
router.delete('/users/:UserId', deleteUserById);

>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
export default router;
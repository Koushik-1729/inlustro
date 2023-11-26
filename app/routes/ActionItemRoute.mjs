<<<<<<< HEAD
import express from 'express';
import {
  createActionItem,
  getAllActionItems,
  getActionItemById,
  updateActionItem,
} from '../controllers/ActionItemController.mjs'; 
const router = express.Router();
router.post('/actionitems', createActionItem);
router.get('/actionitems', getAllActionItems);
router.get('/actionitems/:actionItemId', getActionItemById);
router.put('/actionitems/:actionItemId', updateActionItem);
export default router;

=======
import express from 'express';
import {
  createActionItem,
  getAllActionItems,
  getActionItemById,
  updateActionItem,
} from '../controllers/ActionItemController.mjs'; 
const router = express.Router();
router.post('/actionitems', createActionItem);
router.get('/actionitems', getAllActionItems);
router.get('/actionitems/:actionItemId', getActionItemById);
router.put('/actionitems/:actionItemId', updateActionItem);
export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

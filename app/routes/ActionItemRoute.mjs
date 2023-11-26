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


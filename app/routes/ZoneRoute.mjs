import express from 'express';
import {
  registerZone,
  getAllZones,
  deleteZone,
  updateZoneById,
  deleteZoneById,
} from '../controllers/ZoneController.mjs';

const router = express.Router();

// Register a new Zone
router.post('/zones', registerZone);

// Get all zones
router.get('/zones', getAllZones);

// Delete a Zone
router.delete('/zones/:id', deleteZone);

// Update a Zone by ID
router.put('/zones/:id', updateZoneById);

// Delete a Zone by ID
router.delete('/zones/:id', deleteZoneById);

export default router;

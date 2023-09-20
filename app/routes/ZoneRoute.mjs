// routes/zoneRoutes.js
import express from 'express';
const router = express.Router();
export {
  createZone,
  getAllZones,
  getZoneById,
  updateZoneById,
  deleteZoneById,
}  from '../controllers/ZoneController.mjs';

// Create a new zone
router.post('/', createZone);

// Get all zones
router.get('/', getAllZones);

// Get a single zone by ID
router.get('/:id', getZoneById);

// Update a zone by ID
router.put('/:id', updateZoneById);

// Delete a zone by ID
router.delete('/:id', deleteZoneById);

export default { router };


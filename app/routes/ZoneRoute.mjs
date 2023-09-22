import express from 'express';

// Create a new zone
router.post('/', createZone);

// Get all zones
router.get('/', getAllZones);

// Get a single zone by ID
router.get('/:id', getZoneById);

// Delete a zone by ID
router.delete('/:id', deleteZoneById);

export default { router };


//const mongoose = require('mongoose');

import { Zone } from '../schema/Schemas.mjs';
 // Replace with the path to your model file
// Create a new zone
export async function createZone(req, res) {
  try {
    const { ZoneID, ZoneName } = req.body;
    const newZone = new Zone({ ZoneID, ZoneName });
    const savedZone = await newZone.save();
    res.status(201).json(savedZone);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the zone.' });
  }
}

// Get all zones
export async function getAllZones(req, res) {
  try {
    const zones = await Zone.find();
    res.json(zones);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch zones.' });
  }
}

// Get a single zone by ID
export async function getZoneById(req, res) {
  try {
    const zone = await Zone.findById(req.params.id);
    if (!zone) {
      return res.status(404).json({ error: 'Zone not found.' });
    }
    res.json(zone);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the zone.' });
  }
}

// Update a zone by ID
export async function updateZoneById(req, res) {
  try {
    const { ZoneName } = req.body;
    const updatedZone = await Zone.findByIdAndUpdate(
      req.params.id,
      { ZoneName },
      { new: true }
    );
    if (!updatedZone) {
      return res.status(404).json({ error: 'Zone not found.' });
    }
    res.json(updatedZone);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the zone.' });
  }
}

// Delete a zone by ID
export async function deleteZoneById(req, res) {
  try {
    const deletedZone = await Zone.findByIdAndRemove(req.params.id);
    if (!deletedZone) {
      return res.status(404).json({ error: 'Zone not found.' });
    }
    res.json({ message: 'Zone deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the zone.' });
  }
}

//const mongoose = require('mongoose');

import { Zone } from '../schema/Schemas.mjs';

// Function to register a new Zone
async function registerZone(req, res) {
    try {
      
  
    const { ZoneID, ZoneName } = req.body;
      console.log('Request Body:', req.body);
  
      // Create a new Zone record with the specified ZoneID
      const newZone = new Zone({
        ZoneID, ZoneName
      });
  
      await newZone.save();
  
      res.status(201).json(newZone);
    } catch (error) {
    res.status(500).json({ error: 'Could not create the zone.' });
  }
}

// Get all zones
export async function getAllZones(req, res) {
  try {
      const { ZoneId } = req.params;
      const { ZoneName } = req.body;
  
      // Find the Zone by ZoneId
      const zone = await Zone.findById(ZoneId);
  
      if (!zone) {
        return res.status(404).json({ error: 'Zone not found.' });
      }
  
      // Update Zone fields
      zone.ZoneName = ZoneName;
  
      await zone.save();
  
      res.json(zone);
    } catch (error) {
    res.status(500).json({ error: 'Could not fetch zones.' });
  }
}

  // Function to delete a Zone
  async function deleteZone(req, res) {
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

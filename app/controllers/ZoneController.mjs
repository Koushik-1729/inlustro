//const mongoose = require('mongoose');

import { Zone } from '../schema/Schemas.mjs';


async function registerZone(req, res) {
    try {
      
  
    const { ZoneID, ZoneName } = req.body;
      console.log('Request Body:', req.body);
  
    
      const newZone = new Zone({
        ZoneID, ZoneName
      });
  
      await newZone.save();
  
      res.status(201).json(newZone);
    } catch (error) {
    res.status(500).json({ error: 'Could not create the zone.' });
  }
}

async function getAllZones(req, res) {
  try {
      const { ZoneId } = req.params;
      const { ZoneName } = req.body;
  
    
      const zone = await Zone.findById(ZoneId);
  
      if (!zone) {
        return res.status(404).json({ error: 'Zone not found.' });
      }
  
      
      zone.ZoneName = ZoneName;
  
      await zone.save();
  
      res.json(zone);
    } catch (error) {
    res.status(500).json({ error: 'Could not fetch zones.' });
  }
}

 
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

async function updateZoneById(req, res) {
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

async function deleteZoneById(req, res) {
  try {
    const deletedZone = await Zone.findByIdAndRemove(req.params.id);
    if (!deletedZone) {
      return res.status(404).json({ error: 'Zone not found.' });
    }
    res.json({ message: 'Zone deleted successfully.'});
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the zone.'});
  }
}
export  {
  registerZone,
  getAllZones,
  deleteZone,
  updateZoneById,
  deleteZoneById,
};






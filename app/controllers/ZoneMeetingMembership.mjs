import express from 'express';
import { ZoneMeetingMembership,User,Meeting} from '../schema/Schemas.mjs';
async function createZoneMeetingMembership(req, res) {
  try {
    const { ZoneMeetingMembershipID,ZoneID, MeetingID } = req.body;

    // Create a new zone meeting membership entry
    const newZoneMeetingMembership = new ZoneMeetingMembership({
      ZoneMeetingMembershipID,
      ZoneID,
      MeetingID,
    });

    await newZoneMeetingMembership.save();

    res.status(201).json(newZoneMeetingMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create zone meeting membership entry.' });
  }
}

async function getAllZoneMeetingMemberships(req, res) {
  try {
    const zoneMeetingMembership = await ZoneMeetingMembership.find()
    .populate({
      path: 'ZoneID',
      select: 'ZoneID', 
    })
      .populate('MeetingID')
      .exec();

    res.json(zoneMeetingMembership);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch zone meeting membership entries.' });
  }
}


// Function to retrieve a single zone meeting membership entry by ID with optional population
async function getZoneMeetingMembershipById(req, res) {
  try {
    const { zoneMeetingMembershipId, populateFields } = req.params;
    const query = ZoneMeetingMembership.findById(zoneMeetingMembershipId);

    // Optionally populate ZoneID and MeetingID fields based on the request
    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const zoneMeetingMembership = await query.exec();

    if (!zoneMeetingMembership) {
      return res.status(404).json({ error: 'Zone meeting membership entry not found.' });
    }

    res.json(zoneMeetingMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the zone meeting membership entry.' });
  }
}

async function updateZoneMeetingMembership(req, res) {
  try {
    const { zoneMeetingMembershipId } = req.params;
    const { ZoneID, MeetingID } = req.body;

   
    const zoneMeetingMembership = await ZoneMeetingMembership.findById(zoneMeetingMembershipId);

    if (!zoneMeetingMembership) {
      return res.status(404).json({ error: 'Zone meeting membership entry not found.' });
    }

   
    zoneMeetingMembership.ZoneID = ZoneID;
    zoneMeetingMembership.MeetingID = MeetingID;

    await zoneMeetingMembership.save();

    res.json(zoneMeetingMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update zone meeting membership entry.' });
  }
}

async function deleteZoneMeetingMembership(req, res) {
  try {
    const { zoneMeetingMembershipId } = req.params;

    const deletedZoneMeetingMembership = await ZoneMeetingMembership.findByIdAndRemove(
      zoneMeetingMembershipId
    );

    if (!deletedZoneMeetingMembership) {
      return res.status(404).json({ error: 'Zone meeting membership entry not found.' });
    }

    res.json({ message: 'Zone meeting membership entry deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete zone meeting membership entry.' });
  }
}

export {
  createZoneMeetingMembership,
  getAllZoneMeetingMemberships,
  getZoneMeetingMembershipById,
  updateZoneMeetingMembership,
  deleteZoneMeetingMembership,
};
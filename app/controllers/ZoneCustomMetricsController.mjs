import express from 'express';
import {Zone,ZoneCustomMetrics } from '../schema/Schemas.mjs';

async function createZoneCustomMetrics(req, res) {
  try {
    const { ZoneCustomMetricsID,ZoneID, CustomMetricsID, Value, Timestamp } = req.body;

    
    const newZoneCustomMetrics = new ZoneCustomMetrics({
      ZoneCustomMetricsID,
      ZoneID,
      CustomMetricsID,
      Value,
      Timestamp,
    });

    await newZoneCustomMetrics.save();

    res.status(201).json(newZoneCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create zone custom metrics entry.' });
  }
}

async function getAllZoneCustomMetrics(req, res) {
  try {
    const { populateFields } = req.query;
    const query = ZoneCustomMetrics.find();

    
    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const zoneCustomMetrics = await query.exec();

    res.json(zoneCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch zone custom metrics entries.' });
  }
}

async function getZoneCustomMetricsById(req, res) {
  try {
    const { zoneCustomMetricsId, populateFields } = req.params;
    const query = ZoneCustomMetrics.findById(zoneCustomMetricsId);

  
    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const zoneCustomMetrics = await query.exec();

    if (!zoneCustomMetrics) {
      return res.status(404).json({ error: 'Zone custom metrics entry not found.' });
    }

    res.json(zoneCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the zone custom metrics entry.' });
  }
}


async function updateZoneCustomMetrics(req, res) {
  try {
    const { zoneCustomMetricsId } = req.params;
    const { ZoneID, CustomMetricsID, Value, Timestamp } = req.body;

  
    const zoneCustomMetrics = await ZoneCustomMetrics.findById(zoneCustomMetricsId);

    if (!zoneCustomMetrics) {
      return res.status(404).json({ error: 'Zone custom metrics entry not found.' });
    }

    
    zoneCustomMetrics.ZoneID = ZoneID;
    zoneCustomMetrics.CustomMetricsID = CustomMetricsID;
    zoneCustomMetrics.Value = Value;
    zoneCustomMetrics.Timestamp = Timestamp;

    await zoneCustomMetrics.save();

    res.json(zoneCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update zone custom metrics entry.' });
  }
}


async function deleteZoneCustomMetrics(req, res) {
  try {
    const { zoneCustomMetricsId } = req.params;

 
    const deletedZoneCustomMetrics = await ZoneCustomMetrics.findByIdAndRemove(
      zoneCustomMetricsId
    );

    if (!deletedZoneCustomMetrics) {
      return res.status(404).json({ error: 'Zone custom metrics entry not found.' });
    }

    res.json({ message: 'Zone custom metrics entry deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete zone custom metrics entry.' });
  }
}

export {
  createZoneCustomMetrics,
  getAllZoneCustomMetrics,
  getZoneCustomMetricsById,
  updateZoneCustomMetrics,
  deleteZoneCustomMetrics,
};
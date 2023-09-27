import express from 'express';
import { User,Zone,Meeting,ZoneMeetingAnalytics } from '../schema/Schemas.mjs';
async function createZoneMeetingAnalytics(req, res) {
  try {
    const sampleData = {
      ZoneMostDiscussedTopics: {
        topic1: "Discussion about Maths",
        topic2: "About Backend",
      }
    };
    const SampleData1=`{ "ZoneMeetingDuration": "3 hours" }`;
    const SampleData2={
      ZoneTotalSpeakingTimePerParticipant: {
        participant1: "95 minutes",
        participant2: "90 minutes",
      }};
    
    const {
      ZoneMeetingAnalyticsID,
      ZoneID,
      MeetingID,
      ZoneAverageEngagementLevel,
      ZoneMostEngagedParticipant,
      ZoneMostTalkativeParticipant,
    } = req.body;

 
    const newZoneMeetingAnalytics = new ZoneMeetingAnalytics({
      ZoneMeetingAnalyticsID,
      ZoneID,
      MeetingID,
      ZoneAverageEngagementLevel,
      ZoneMostEngagedParticipant,
      ZoneMostTalkativeParticipant,
      ZoneMostDiscussedTopics:sampleData,
      ZoneMeetingDuration:SampleData1,
      ZoneTotalSpeakingTimePerParticipant:SampleData2,
    });

    await newZoneMeetingAnalytics.save();

    res.status(201).json(newZoneMeetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create zone meeting analytics entry.' });
  }
}


async function getAllZoneMeetingAnalytics(req, res) {
  try {
    const { populateFields } = req.query;
    const query = ZoneMeetingAnalytics.find();
    if (populateFields) {
      const fields = populateFields.split(',');
      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }
    query.select('-__v');
    const zoneMeetingAnalytics = await query.exec();
    res.json(zoneMeetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch zone meeting analytics entries.' });
  }
}


async function getZoneMeetingAnalyticsById(req, res) {
  try {
    const { zoneMeetingAnalyticsId, populateFields } = req.params;
    const query = ZoneMeetingAnalytics.findById(zoneMeetingAnalyticsId);

    
    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const zoneMeetingAnalytics = await query.exec();

    if (!zoneMeetingAnalytics) {
      return res.status(404).json({ error: 'Zone meeting analytics entry not found.' });
    }

    res.json(zoneMeetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the zone meeting analytics entry.' });
  }
}


async function updateZoneMeetingAnalytics(req, res) {
  try {
    const { zoneMeetingAnalyticsId } = req.params;
    const {
      ZoneID,
      MeetingID,
      ZoneAverageEngagementLevel,
      ZoneMostEngagedParticipant,
      ZoneMostTalkativeParticipant,
      ZoneMostDiscussedTopics,
      ZoneMeetingDuration,
      ZoneTotalSpeakingTimePerParticipant,
    } = req.body;

    const zoneMeetingAnalytics = await ZoneMeetingAnalytics.findById(zoneMeetingAnalyticsId);

    if (!zoneMeetingAnalytics) {
      return res.status(404).json({ error: 'Zone meeting analytics entry not found.' });
    }

  
    zoneMeetingAnalytics.ZoneID = ZoneID;
    zoneMeetingAnalytics.MeetingID = MeetingID;
    zoneMeetingAnalytics.ZoneAverageEngagementLevel = ZoneAverageEngagementLevel;
    zoneMeetingAnalytics.ZoneMostEngagedParticipant = ZoneMostEngagedParticipant;
    zoneMeetingAnalytics.ZoneMostTalkativeParticipant = ZoneMostTalkativeParticipant;
    zoneMeetingAnalytics.ZoneMostDiscussedTopics = ZoneMostDiscussedTopics;
    zoneMeetingAnalytics.ZoneMeetingDuration = ZoneMeetingDuration;
    zoneMeetingAnalytics.ZoneTotalSpeakingTimePerParticipant = ZoneTotalSpeakingTimePerParticipant;

    await zoneMeetingAnalytics.save();

    res.json(zoneMeetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update zone meeting analytics entry.' });
  }
}


async function deleteZoneMeetingAnalytics(req, res) {
  try {
    const { zoneMeetingAnalyticsId } = req.params;

    
    const deletedZoneMeetingAnalytics = await ZoneMeetingAnalytics.findByIdAndRemove(
      zoneMeetingAnalyticsId
    );

    if (!deletedZoneMeetingAnalytics) {
      return res.status(404).json({ error: 'Zone meeting analytics entry not found.' });
    }

    res.json({ message: 'Zone meeting analytics entry deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete zone meeting analytics entry.' });
  }
}

export {
  createZoneMeetingAnalytics,
  getAllZoneMeetingAnalytics,
  getZoneMeetingAnalyticsById,
  updateZoneMeetingAnalytics,
  deleteZoneMeetingAnalytics,
};
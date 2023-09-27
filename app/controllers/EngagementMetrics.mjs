import express from 'express';
import { EngagementMetrics,Meeting,Participant,User} from '../schema/Schemas.mjs';
async function createEngagementMetrics(req, res) {
  try {
    const {
      EngagementMetricsID,
      MeetingID,
      ParticipantUserID,
    } = req.body;
    const facialExpressionsData = {
      happiness: 0.45,
      sadness: 0.3,
      anger: 1.0,
      surprise: 0.25,
      confusion:0.01
      
    };
    const toneOfVoiceData = {
      pitch: 120, 
      volume: 80, 
    };
    const involvementLevelData = {
      attention: 0.8,
      engagement: 0.6,
    };

    const newEngagementMetrics = new EngagementMetrics({
      EngagementMetricsID,
      MeetingID,
      ParticipantUserID,
      FacialExpressionsData:facialExpressionsData,
      ToneOfVoiceData:toneOfVoiceData,
      InvolvementLevelData:involvementLevelData,
    });

    await newEngagementMetrics.save();

    res.status(201).json(newEngagementMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create engagement metrics.' });
  }
}


async function updateEngagementMetrics(req, res) {
  try {
    const { EngagementMetricsID } = req.params;
    const {
      MeetingID,
      ParticipantUserID,
      FacialExpressionsData,
      ToneOfVoiceData,
      InvolvementLevelData,
    } = req.body;

  
    const engagementMetrics = await EngagementMetrics.findById(EngagementMetricsID);

    if (!engagementMetrics) {
      return res.status(404).json({ error: 'Engagement metrics not found.' });
    }

    
    engagementMetrics.MeetingID = MeetingID;
    engagementMetrics.ParticipantUserID = ParticipantUserID;
    engagementMetrics.FacialExpressionsData = FacialExpressionsData;
    engagementMetrics.ToneOfVoiceData = ToneOfVoiceData;
    engagementMetrics.InvolvementLevelData = InvolvementLevelData;

    await engagementMetrics.save();

    res.json(engagementMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update engagement metrics.' });
  }
}


async function deleteEngagementMetrics(req, res) {
  try {
    const { EngagementMetricsID } = req.params;

    
    const deletedEngagementMetrics = await EngagementMetrics.findByIdAndRemove(EngagementMetricsID);

    if (!deletedEngagementMetrics) {
      return res.status(404).json({ error: 'Engagement metrics not found.' });
    }

    res.json({ message: 'Engagement metrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete engagement metrics.' });
  }
}


async function getAllEngagementMetrics(req, res) {
  try {
    
    const engagementMetrics = await EngagementMetrics.find()
      .populate({
        path: 'MeetingID',
        model: Meeting,
      })
      .populate({
        path: 'ParticipantUserID',
        model: User,
      })
      .exec();

    res.json(engagementMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch engagement metrics.' });
  }
}


async function getEngagementMetricsById(req, res) {
  try {
    const { EngagementMetricsID } = req.params;

    
    const engagementMetrics = await EngagementMetrics.findById(EngagementMetricsID)
      
      .populate({
        path:'MeetingID',
        Model:Meeting
      }) 
     
      populate({
        path:'ParticipantUserID',
        Model:User
      })

      .exec();

    if (!engagementMetrics) {
      return res.status(404).json({ error: 'Engagement metrics not found.' });
    }

    res.json(engagementMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the engagement metrics.' });
  }
}

export {
  createEngagementMetrics,
  updateEngagementMetrics,
  deleteEngagementMetrics,
  getAllEngagementMetrics,
  getEngagementMetricsById,
};
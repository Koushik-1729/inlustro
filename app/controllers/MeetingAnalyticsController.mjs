<<<<<<< HEAD

import mongoose from 'mongoose';
import express from 'express';
import {User} from '../schema/Schemas.mjs';
import { MeetingAnalytics,Meeting, } from '../schema/Schemas.mjs';

async function createMeetingAnalytics(req, res) {
  try {
    const {
      MeetingAnalyticsID,
      AverageEngagementLevel,
      MostDiscussedTopics,
      MeetingDuration,
      TotalSpeakingTimePerParticipant,
    } = req.body;

  
    const sampleMeeting = {
      _id: new mongoose.Types.ObjectId(),
      name: 'Zoom Meeting',
      date: new Date(),
    };

    const sampleUser = {
      _id: new mongoose.Types.ObjectId(),
      username: 'Koushik Reddy',
      name: 'koushik30',
    };

 
    const newMeetingAnalytics = new MeetingAnalytics({
      MeetingAnalyticsID,
      MeetingID: "650b3e7c49956c0bb22eaac2", 
      AverageEngagementLevel,
      MostEngagedParticipant: "6509d77b7d1f3a9283a71629", 
      MostTalkativeParticipant: "6509d77b7d1f3a9283a71629", 
      MostDiscussedTopics,
      MeetingDuration,
      TotalSpeakingTimePerParticipant,
    });

    await newMeetingAnalytics.save();

    
    const sampleData = {
      message: 'Meeting analytics created successfully.',
      data: newMeetingAnalytics,
      sampleMeeting,
      sampleUser,
    };

    res.status(201).json(sampleData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create meeting analytics.' });
  }
}


async function updateMeetingAnalytics(req, res) {
  try {
    const { MeetingAnalyticsID } = req.params;
    const {
      MeetingID,
      AverageEngagementLevel,
      MostEngagedParticipant,
      MostTalkativeParticipant,
      MostDiscussedTopics,
      MeetingDuration,
      TotalSpeakingTimePerParticipant,
    } = req.body;

    
    const meetingAnalytics = await MeetingAnalytics.findById(MeetingAnalyticsID);

    if (!meetingAnalytics) {
      return res.status(404).json({ error: 'Meeting analytics not found.' });
    }

    
    meetingAnalytics.MeetingID = MeetingID;
    meetingAnalytics.AverageEngagementLevel = AverageEngagementLevel;
    meetingAnalytics.MostEngagedParticipant = MostEngagedParticipant;
    meetingAnalytics.MostTalkativeParticipant = MostTalkativeParticipant;
    meetingAnalytics.MostDiscussedTopics = MostDiscussedTopics;
    meetingAnalytics.MeetingDuration = MeetingDuration;
    meetingAnalytics.TotalSpeakingTimePerParticipant = TotalSpeakingTimePerParticipant;

    await meetingAnalytics.save();

    res.json(meetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update meeting analytics.' });
  }
}


async function deleteMeetingAnalytics(req, res) {
  try {
    const { MeetingAnalyticsID } = req.params;


    const deletedMeetingAnalytics = await MeetingAnalytics.findByIdAndRemove(MeetingAnalyticsID);

    if (!deletedMeetingAnalytics) {
      return res.status(404).json({ error: 'Meeting analytics not found.' });
    }

    res.json({ message: 'Meeting analytics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete meeting analytics.' });
  }
}


async function getAllMeetingAnalytics(req, res) {
  try {
    
    const meetingAnalytics = await MeetingAnalytics.find()
      .populate({
        path:'MeetiingID',
        model:Meeting,
       })
      .populate({
        path: 'MostEngagedParticipant',
        model: User,
      })
      .populate({
        path: 'MostTalkativeParticipant',
        model: User,
      })
      .exec();
    console.log('after populate:', meetingAnalytics);

    res.json(meetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch meeting analytics.' });
  }
}


async function getMeetingAnalyticsById(req, res) {
  try {
    const { MeetingAnalyticsID } = req.params;

    
    const meetingAnalytics = await MeetingAnalytics.findById(MeetingAnalyticsID)
    .populate({
      path:'MeetiingID',
      model:Meeting,
     })
     .populate({
      path: 'MostEngagedParticipant',
      model: User,
    })
    .populate({
      path: 'MostTalkativeParticipant',
      model: User,
    })
      .exec();

    if (!meetingAnalytics) {
      return res.status(404).json({ error: 'Meeting analytics not found.' });
    }

    res.json(meetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the meeting analytics.' });
  }
}

export {
  createMeetingAnalytics,
  updateMeetingAnalytics,
  deleteMeetingAnalytics,
  getAllMeetingAnalytics,
  getMeetingAnalyticsById,
=======

import mongoose from 'mongoose';
import express from 'express';
import {User} from '../schema/Schemas.mjs';
import { MeetingAnalytics,Meeting, } from '../schema/Schemas.mjs';

async function createMeetingAnalytics(req, res) {
  try {
    const {
      MeetingAnalyticsID,
      AverageEngagementLevel,
      MostDiscussedTopics,
      MeetingDuration,
      TotalSpeakingTimePerParticipant,
    } = req.body;

  
    const sampleMeeting = {
      _id: new mongoose.Types.ObjectId(),
      name: 'Zoom Meeting',
      date: new Date(),
    };

    const sampleUser = {
      _id: new mongoose.Types.ObjectId(),
      username: 'Koushik Reddy',
      name: 'koushik30',
    };

 
    const newMeetingAnalytics = new MeetingAnalytics({
      MeetingAnalyticsID,
      MeetingID: "650b3e7c49956c0bb22eaac2", 
      AverageEngagementLevel,
      MostEngagedParticipant: "6509d77b7d1f3a9283a71629", 
      MostTalkativeParticipant: "6509d77b7d1f3a9283a71629", 
      MostDiscussedTopics,
      MeetingDuration,
      TotalSpeakingTimePerParticipant,
    });

    await newMeetingAnalytics.save();

    
    const sampleData = {
      message: 'Meeting analytics created successfully.',
      data: newMeetingAnalytics,
      sampleMeeting,
      sampleUser,
    };

    res.status(201).json(sampleData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create meeting analytics.' });
  }
}


async function updateMeetingAnalytics(req, res) {
  try {
    const { MeetingAnalyticsID } = req.params;
    const {
      MeetingID,
      AverageEngagementLevel,
      MostEngagedParticipant,
      MostTalkativeParticipant,
      MostDiscussedTopics,
      MeetingDuration,
      TotalSpeakingTimePerParticipant,
    } = req.body;

    
    const meetingAnalytics = await MeetingAnalytics.findById(MeetingAnalyticsID);

    if (!meetingAnalytics) {
      return res.status(404).json({ error: 'Meeting analytics not found.' });
    }

    
    meetingAnalytics.MeetingID = MeetingID;
    meetingAnalytics.AverageEngagementLevel = AverageEngagementLevel;
    meetingAnalytics.MostEngagedParticipant = MostEngagedParticipant;
    meetingAnalytics.MostTalkativeParticipant = MostTalkativeParticipant;
    meetingAnalytics.MostDiscussedTopics = MostDiscussedTopics;
    meetingAnalytics.MeetingDuration = MeetingDuration;
    meetingAnalytics.TotalSpeakingTimePerParticipant = TotalSpeakingTimePerParticipant;

    await meetingAnalytics.save();

    res.json(meetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update meeting analytics.' });
  }
}


async function deleteMeetingAnalytics(req, res) {
  try {
    const { MeetingAnalyticsID } = req.params;


    const deletedMeetingAnalytics = await MeetingAnalytics.findByIdAndRemove(MeetingAnalyticsID);

    if (!deletedMeetingAnalytics) {
      return res.status(404).json({ error: 'Meeting analytics not found.' });
    }

    res.json({ message: 'Meeting analytics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete meeting analytics.' });
  }
}


async function getAllMeetingAnalytics(req, res) {
  try {
    
    const meetingAnalytics = await MeetingAnalytics.find()
      .populate({
        path:'MeetiingID',
        model:Meeting,
       })
      .populate({
        path: 'MostEngagedParticipant',
        model: User,
      })
      .populate({
        path: 'MostTalkativeParticipant',
        model: User,
      })
      .exec();
    console.log('after populate:', meetingAnalytics);

    res.json(meetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch meeting analytics.' });
  }
}


async function getMeetingAnalyticsById(req, res) {
  try {
    const { MeetingAnalyticsID } = req.params;

    
    const meetingAnalytics = await MeetingAnalytics.findById(MeetingAnalyticsID)
    .populate({
      path:'MeetiingID',
      model:Meeting,
     })
     .populate({
      path: 'MostEngagedParticipant',
      model: User,
    })
    .populate({
      path: 'MostTalkativeParticipant',
      model: User,
    })
      .exec();

    if (!meetingAnalytics) {
      return res.status(404).json({ error: 'Meeting analytics not found.' });
    }

    res.json(meetingAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the meeting analytics.' });
  }
}

export {
  createMeetingAnalytics,
  updateMeetingAnalytics,
  deleteMeetingAnalytics,
  getAllMeetingAnalytics,
  getMeetingAnalyticsById,
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
};
<<<<<<< HEAD
import express from 'express';
import { SpeakerRecognition } from '../schema/Schemas.mjs';

async function createSpeakerRecognition(req, res) {
  try {
    const { SpeakerRecognitionID,MeetingID, SpeakerUserID, StartTimestamp, EndTimestamp } = req.body;

    const newSpeakerRecognition = new SpeakerRecognition({
      SpeakerRecognitionID,
      MeetingID,
      SpeakerUserID,
      StartTimestamp,
      EndTimestamp,
    });

    await newSpeakerRecognition.save();

    res.status(201).json(newSpeakerRecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create speaker recognition entry.' });
  }
}

async function updateSpeakerRecognition(req, res) {
  try {
    const { SpeakerRecognitionID } = req.params;
    const { MeetingID, SpeakerUserID, StartTimestamp, EndTimestamp } = req.body;

   
    const speakerRecognition = await SpeakerRecognition.findById(SpeakerRecognitionID);

    if (!speakerRecognition) {
      return res.status(404).json({ error: 'Speaker recognition entry not found.' });
    }

    
    speakerRecognition.MeetingID = MeetingID;
    speakerRecognition.SpeakerUserID = SpeakerUserID;
    speakerRecognition.StartTimestamp = StartTimestamp;
    speakerRecognition.EndTimestamp = EndTimestamp;

    await speakerRecognition.save();

    res.json(speakerRecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update speaker recognition entry.' });
  }
}

async function deleteSpeakerRecognition(req, res) {
  try {
    const { SpeakerRecognitionID } = req.params;

  
    const deletedSpeakerRecognition = await SpeakerRecognition.findByIdAndRemove(SpeakerRecognitionID);

    if (!deletedSpeakerRecognition) {
      return res.status(404).json({ error: 'Speaker recognition entry not found.' });
    }

    res.json({ message: 'Speaker recognition entry deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete speaker recognition entry.' });
  }
}

async function getAllSpeakerRecognitions(req, res) {
  try {
    const speakerrecognition = await SpeakerRecognition.find()
    .populate({
      path:'MeetingID',
      model:'Meeting'
    })  // Populate the ProjectID field
    .populate({
      path:"SpeakerUserID",
      model:User,
    }) // Populate the CustomMetricsID field
      .exec();
    res.json(speakerrecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch ProjectCustomMetrics.' });
  }
}


async function getSpeakerRecognitionById(req, res) {
  try {
    const speakerrecognition = await SpeakerRecognition.find()
    .populate({
      path:'MeetingID',
      model:'Meeting'
    })  // Populate the ProjectID field
    .populate({
      path:"SpeakerUserID",
      model:User,
    }) // Populate the CustomMetricsID field
      .exec();
    res.json(speakerrecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch ProjectCustomMetrics.' });
  }
}
export{
  createSpeakerRecognition,
  updateSpeakerRecognition,
  deleteSpeakerRecognition,
  getAllSpeakerRecognitions,
  getSpeakerRecognitionById

=======
import express from 'express';
import { SpeakerRecognition } from '../schema/Schemas.mjs';

async function createSpeakerRecognition(req, res) {
  try {
    const { SpeakerRecognitionID,MeetingID, SpeakerUserID, StartTimestamp, EndTimestamp } = req.body;

    const newSpeakerRecognition = new SpeakerRecognition({
      SpeakerRecognitionID,
      MeetingID,
      SpeakerUserID,
      StartTimestamp,
      EndTimestamp,
    });

    await newSpeakerRecognition.save();

    res.status(201).json(newSpeakerRecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create speaker recognition entry.' });
  }
}

async function updateSpeakerRecognition(req, res) {
  try {
    const { SpeakerRecognitionID } = req.params;
    const { MeetingID, SpeakerUserID, StartTimestamp, EndTimestamp } = req.body;

   
    const speakerRecognition = await SpeakerRecognition.findById(SpeakerRecognitionID);

    if (!speakerRecognition) {
      return res.status(404).json({ error: 'Speaker recognition entry not found.' });
    }

    
    speakerRecognition.MeetingID = MeetingID;
    speakerRecognition.SpeakerUserID = SpeakerUserID;
    speakerRecognition.StartTimestamp = StartTimestamp;
    speakerRecognition.EndTimestamp = EndTimestamp;

    await speakerRecognition.save();

    res.json(speakerRecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update speaker recognition entry.' });
  }
}

async function deleteSpeakerRecognition(req, res) {
  try {
    const { SpeakerRecognitionID } = req.params;

  
    const deletedSpeakerRecognition = await SpeakerRecognition.findByIdAndRemove(SpeakerRecognitionID);

    if (!deletedSpeakerRecognition) {
      return res.status(404).json({ error: 'Speaker recognition entry not found.' });
    }

    res.json({ message: 'Speaker recognition entry deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete speaker recognition entry.' });
  }
}

async function getAllSpeakerRecognitions(req, res) {
  try {
    const speakerrecognition = await SpeakerRecognition.find()
    .populate({
      path:'MeetingID',
      model:'Meeting'
    })  // Populate the ProjectID field
    .populate({
      path:"SpeakerUserID",
      model:User,
    }) // Populate the CustomMetricsID field
      .exec();
    res.json(speakerrecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch ProjectCustomMetrics.' });
  }
}


async function getSpeakerRecognitionById(req, res) {
  try {
    const speakerrecognition = await SpeakerRecognition.find()
    .populate({
      path:'MeetingID',
      model:'Meeting'
    })  // Populate the ProjectID field
    .populate({
      path:"SpeakerUserID",
      model:User,
    }) // Populate the CustomMetricsID field
      .exec();
    res.json(speakerrecognition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch ProjectCustomMetrics.' });
  }
}
export{
  createSpeakerRecognition,
  updateSpeakerRecognition,
  deleteSpeakerRecognition,
  getAllSpeakerRecognitions,
  getSpeakerRecognitionById

>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
}
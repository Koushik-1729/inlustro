import express from 'express';
import { Participant } from '../schema/Schemas.mjs';

// Function to register a new Participant
async function registerParticipant(req, res) {
  try {
    

    const { ParticipantID, MeetingID, UserID, Status } = req.body;
    console.log('Request Body:', req.body);

    // Create a new Participant record with the specified ParticipantID
    const newParticipant = new Participant({
        ParticipantID, 
        MeetingID, 
        UserID, 
        Status,
    });

    await newParticipant.save();

    res.status(201).json(newParticipant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the Participant.' });
  }
}

// Function to update Participant information
async function updateParticipant(req, res) {
  try {
    const { ParticipantId } = req.params;
    const { MeetingID, UserID, Status } = req.body;

    // Find the user by ParticipantId
    const participant = await Participant.findById(ParticipantId);

    if (!participant) {
      return res.status(404).json({ error: 'Participant not found.' });
    }

    // Update Participant fields
    participant.MeetingID = MeetingID;
    participant.UserID = UserID;
    participant.Status = Status;

    await participant.save();

    res.json(participant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update Participant information.' });
  }
}

// Function to delete a Participant
async function deleteParticipant(req, res) {
  try {
    const { ParticipantId } = req.body;

    // Find and remove the Participant by ParticipantId
    const deletedParticipant = await Participant.findByIdAndRemove(ParticipantId);

    if (!deletedParticipant) {
      return res.status(404).json({ error: 'Participant not found.' });
    }

    res.json({ message: 'Participant deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Participant.' });
  }
}
// Function to get all Participants
async function getAllParticipants(req, res) {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch Participants.' });
  }
}

// Function to get a single Participant by ID
async function getParticipantById(req, res) {
  try {
    const { ParticipantId } = req.params;
    const participant = await Participant.findById(ParticipantId);

    if (!participant) {
      return res.status(404).json({ error: 'Participant not found.' });
    }

    res.json(participant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the Participant.' });
  }
}

// Function to delete a Participant by ID
async function deleteParticipantById(req, res) {
  try {
    const { ParticipantId } = req.params;

    // Find and remove the Participant by ParticipantId
    const deletedParticipant = await Participant.findByIdAndRemove(ParticipantId);

    if (!deletedParticipant) {
      return res.status(404).json({ error: 'Participant not found.' });
    }

    res.json({ message: 'Participant deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Participant.' });
  }
}

export {
    registerParticipant,
  updateParticipant,
  getAllParticipants,
  getParticipantById,
  deleteParticipantById,
};

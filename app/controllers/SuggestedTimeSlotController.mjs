import express from 'express';
import { SuggestedTimeSlot,Meeting} from '../schema/Schemas.mjs';

async function createSuggestedTimeSlot(req, res) {
  try {
    const { SuggestedTimeSlotID,MeetingID, ProposedStartTime, ProposedEndTime } = req.body;

    
    const newSuggestedTimeSlot = new SuggestedTimeSlot({
      SuggestedTimeSlotID,
      MeetingID,
      ProposedStartTime,
      ProposedEndTime,
    });

    await newSuggestedTimeSlot.save();

    res.status(201).json(newSuggestedTimeSlot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create suggested time slot.' });
  }
}


async function getSuggestedTimeSlotsForMeeting(req, res) {
  try {
    const { meetingId } = req.params;

    const timeSlots = await SuggestedTimeSlot.find({ MeetingID: meetingId })
      .populate({
        path:'MeetingID',
        model:Meeting,

      })// Populate the MeetingID reference
      .exec();

    res.json(timeSlots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch suggested time slots.' });
  }
}


async function getSuggestedTimeSlotById(req, res) {
  try {
    const { timeSlotId } = req.params;

    const timeSlot = await SuggestedTimeSlot.findById(timeSlotId)
    .populate({
      path:'MeetingID',
      model:Meeting
      }) 
      .exec();

    if (!timeSlot) {
      return res.status(404).json({ error: 'Suggested time slot not found.' });
    }

    res.json(timeSlot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the suggested time slot.' });
  }
}


async function updateSuggestedTimeSlot(req, res) {
  try {
    const { timeSlotId } = req.params;
    const { ProposedStartTime, ProposedEndTime } = req.body;

    const timeSlot = await SuggestedTimeSlot.findById(timeSlotId);

    if (!timeSlot) {
      return res.status(404).json({ error: 'Suggested time slot not found.' });
    }

   
    timeSlot.ProposedStartTime = ProposedStartTime;
    timeSlot.ProposedEndTime = ProposedEndTime;

    await timeSlot.save();

    res.json(timeSlot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update suggested time slot.' });
  }
}


async function deleteSuggestedTimeSlot(req, res) {
  try {
    const { timeSlotId } = req.params;

   
    const deletedTimeSlot = await SuggestedTimeSlot.findByIdAndRemove(timeSlotId);

    if (!deletedTimeSlot) {
      return res.status(404).json({ error: 'Suggested time slot not found.' });
    }

    res.json({ message: 'Suggested time slot deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete suggested time slot.' });
  }
}

export {
  createSuggestedTimeSlot,
  getSuggestedTimeSlotsForMeeting,
  getSuggestedTimeSlotById,
  updateSuggestedTimeSlot,
  deleteSuggestedTimeSlot,
};
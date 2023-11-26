<<<<<<< HEAD
import express from 'express';
import { Meeting } from '../schema/Schemas.mjs';

// Function to register a new Meeting
async function registerMeeting(req, res) {
    try {
      
  
      const { MeetingID, Title, Description, OrganizerID, ScheduledStartTime, ScheduledEndTime, ActualStartTime, ActualEndTime } = req.body;
      console.log('Request Body:', req.body);
  
      // Create a new user record with the specified UserID
      const newMeeting = new Meeting({
        MeetingID, 
        Title, 
        Description, 
        OrganizerID, 
        ScheduledStartTime, 
        ScheduledEndTime, 
        ActualStartTime, 
        ActualEndTime
      });
  
      await newMeeting.save();
  
      res.status(201).json(newMeeting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not register the Meeting.' });
    }
  }
  
  // Function to update Meeting information
  async function updateMeeting(req, res) {
    try {
      const { MeetingId } = req.params;
      const { Title, Description, OrganizerID, ScheduledStartTime, ScheduledEndTime, ActualStartTime, ActualEndTime } = req.body;
  
      // Find the user by UserId
      const meeting = await Meeting.findById(MeetingId);
  
      if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      // Update Meeting fields
      meeting.Title = Title,
      meeting.Description = Description,
      meeting.OrganizerID = OrganizerID,
      meeting.ScheduledStartTime = ScheduledStartTime,
      meeting.ScheduledEndTime = ScheduledEndTime,
      meeting.ActualStartTime = ActualStartTime,
      meeting.ActualEndTime =ActualEndTime,
  
      await meeting.save();
  
      res.json(meeting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not update Meeting information.' });
    }
  }
  
  // Function to delete a Meeting
  async function deleteMeeting(req, res) {
    try {
      const { MeetingId } = req.body;
  
      // Find and remove the Team by TeamId
      const deletedMeeting = await Meeting.findByIdAndRemove(MeetingId);
  
      if (!deletedMeeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      res.json({ message: 'Meeting deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not delete the Meeting.' });
    }
  }
  // Function to get all Teams
  async function getAllMeetings(req, res) {
    try {
      const meetings = await Meeting.find();
      res.json(meetings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch Meetings.' });
    }
  }
  
  // Function to get a single Meeting by ID
  async function getMeetingById(req, res) {
    try {
      const { MeetingId } = req.params;
      const meeting = await Meeting.findById(MeetingId);
  
      if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      res.json(meeting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the Meeting.' });
    }
  }
  
  // Function to delete a Meeting by ID
  async function deleteMeetingById(req, res) {
    try {
      const { MeetingId } = req.params;
  
      // Find and remove the Team by TeamId
      const deletedMeeting = await Meeting.findByIdAndRemove(MeetingId);
  
      if (!deletedMeeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      res.json({ message: 'Meeting deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not delete the Meeting.' });
    }
  }
  
  export {
    registerMeeting,
    updateMeeting,
    getAllMeetings,
    getMeetingById,
    deleteMeetingById,
  };
=======
import express from 'express';
import { Meeting } from '../schema/Schemas.mjs';

// Function to register a new Meeting
async function registerMeeting(req, res) {
    try {
      
  
      const { MeetingID, Title, Description, OrganizerID, ScheduledStartTime, ScheduledEndTime, ActualStartTime, ActualEndTime } = req.body;
      console.log('Request Body:', req.body);
  
      // Create a new user record with the specified UserID
      const newMeeting = new Meeting({
        MeetingID, 
        Title, 
        Description, 
        OrganizerID, 
        ScheduledStartTime, 
        ScheduledEndTime, 
        ActualStartTime, 
        ActualEndTime
      });
  
      await newMeeting.save();
  
      res.status(201).json(newMeeting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not register the Meeting.' });
    }
  }
  
  // Function to update Meeting information
  async function updateMeeting(req, res) {
    try {
      const { MeetingId } = req.params;
      const { Title, Description, OrganizerID, ScheduledStartTime, ScheduledEndTime, ActualStartTime, ActualEndTime } = req.body;
  
      // Find the user by UserId
      const meeting = await Meeting.findById(MeetingId);
  
      if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      // Update Meeting fields
      meeting.Title = Title,
      meeting.Description = Description,
      meeting.OrganizerID = OrganizerID,
      meeting.ScheduledStartTime = ScheduledStartTime,
      meeting.ScheduledEndTime = ScheduledEndTime,
      meeting.ActualStartTime = ActualStartTime,
      meeting.ActualEndTime =ActualEndTime,
  
      await meeting.save();
  
      res.json(meeting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not update Meeting information.' });
    }
  }
  
  // Function to delete a Meeting
  async function deleteMeeting(req, res) {
    try {
      const { MeetingId } = req.body;
  
      // Find and remove the Team by TeamId
      const deletedMeeting = await Meeting.findByIdAndRemove(MeetingId);
  
      if (!deletedMeeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      res.json({ message: 'Meeting deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not delete the Meeting.' });
    }
  }
  // Function to get all Teams
  async function getAllMeetings(req, res) {
    try {
      const meetings = await Meeting.find();
      res.json(meetings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch Meetings.' });
    }
  }
  
  // Function to get a single Meeting by ID
  async function getMeetingById(req, res) {
    try {
      const { MeetingId } = req.params;
      const meeting = await Meeting.findById(MeetingId);
  
      if (!meeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      res.json(meeting);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the Meeting.' });
    }
  }
  
  // Function to delete a Meeting by ID
  async function deleteMeetingById(req, res) {
    try {
      const { MeetingId } = req.params;
  
      // Find and remove the Team by TeamId
      const deletedMeeting = await Meeting.findByIdAndRemove(MeetingId);
  
      if (!deletedMeeting) {
        return res.status(404).json({ error: 'Meeting not found.' });
      }
  
      res.json({ message: 'Meeting deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not delete the Meeting.' });
    }
  }
  
  export {
    registerMeeting,
    updateMeeting,
    getAllMeetings,
    getMeetingById,
    deleteMeetingById,
  };
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
  
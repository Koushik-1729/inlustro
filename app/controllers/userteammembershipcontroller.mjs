import express from 'express';
import { UserTeamMembership } from '../schema/Schemas.mjs';

// Function to register a new UserTeamMembership
async function registerUserTeamMembership(req, res) {
    try {
      
  
      const { UserTeamMembershipID, UserID, TeamID } = req.body;
      console.log('Request Body:', req.body);
  
      // Create a new UserTeamMembership record with the specified UserTeamMembershipID
      const newUserTeamMembership = new UserTeamMembership({
        UserTeamMembershipID, // Manually set UserID
        UserID,
        TeamID,
      });
  
      await newUserTeamMembership.save();
  
      res.status(201).json(newUserTeamMembership);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not register the UserTeamMembership.' });
    }
  }
  
  // Function to update UserTeamMembership information
  async function updateUserTeamMembership(req, res) {
    try {
      const { UserTeamMembershipId } = req.params;
  
      // Find the userteammembership by UserTeamMembershipId
      const userteammembership = await UserTeamMembership.findById(UserTeamMembershipId);
  
      if (!userteammembership) {
        return res.status(404).json({ error: 'userteammembership not found.' });
      }
  
      // Update userteammembership fields
      userteammembership.UserTeamMembershipID = UserTeamMembershipID;
  
      await userteammembership.save();
  
      res.json(userteammembership);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not update UserTeamMembership information.' });
    }
  }
  
  // Function to delete a UserTeamMembership
  async function deleteUserTeamMembership(req, res) {
    try {
      const { UserTeamMembershipId } = req.params;
  
      // Find and remove the UserTeamMembership by UserTeamMembershipId
      const deletedUserTeamMembership = await UserTeamMembership.findByIdAndRemove(UserTeamMembershipId);
  
      if (!deletedUserTeamMembership) {
        return res.status(404).json({ error: 'UserTeamMembership not found.' });
      }
  
      res.json({ message: 'UserTeamMembership deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not delete the UserTeamMembership.' });
    }
  }
  // Function to get all UserTeamMemberships
  async function getAllUserTeamMemberships(req, res) {
    try {
      const userteammemberships = await UserTeamMembership.find();
      res.json(userteammemberships);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch UserTeamMemberships.' });
    }
  }
  
  // Function to get a single UserTeamMembership by ID
  async function getUserTeamMembershipById(req, res) {
    try {
      const { UserTeamMembershipId } = req.params;
      const userteammembership = await UserTeamMembership.findById(UserTeamMembershipId);
  
      if (!userteammembership) {
        return res.status(404).json({ error: 'UserTeamMembership not found.' });
      }
  
      res.json(userteammembership);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the UserTeamMembership.' });
    }
  }
  
  // Function to delete a UserTeamMembership by ID
  async function deleteUserTeamMembershipById(req, res) {
    try {
      const { UserTeamMembershipId } = req.params;
  
      // Find and remove the UserTeamMembership by UserTeamMembershipId
      const deletedUserTeamMembership = await UserTeamMembership.findByIdAndRemove(UserTeamMembershipId);
  
      if (!deletedUserTeamMembership) {
        return res.status(404).json({ error: 'UserTeamMembership not found.' });
      }
  
      res.json({ message: 'UserTeamMembership deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not delete the UserTeamMembership.' });
    }
  }
  
  export {
    registerUserTeamMembership,
    updateUserTeamMembership,
    getAllUserTeamMemberships,
    getUserTeamMembershipById,
    deleteUserTeamMembershipById,
  };
  
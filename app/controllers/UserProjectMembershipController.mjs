import express from 'express';
import { UserProjectMembership } from '../schema/Schemas.mjs';

// Function to register a new UserProjectMembership
async function registerUserProjectMembership(req, res) {
  try {
    

    const { UserProjectMembershipID, UserID, ProjectID } = req.body;
    console.log('Request Body:', req.body);

    // Create a new UserProjectMembership record with the specified UserProjectMembershipID
    const newUserProjectMembership = new UserProjectMembership({
        UserProjectMembershipID, 
        UserID, 
        ProjectID,
    });

    await newUserProjectMembership.save();

    res.status(201).json(newUserProjectMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the UserProjectMembership.' });
  }
}

// Function to update UserProjectMembership information
async function updateUserProjectMembership(req, res) {
  try {
    const { UserProjectMembershipID , UserID, ProjectID } = req.body;

    // Find the user by UserProjectMembershipId
    const userprojectmembership = await UserProjectMembership.findById(UserProjectMembershipId);

    if (!userprojectmembership) {
      return res.status(404).json({ error: 'UserProjectMembership not found.' });
    }

    // Update UserProjectMembership fields
    userprojectmembership.UserProjectMembershipTypeID = UserProjectMembershipID,
    userprojectmembership.UserID = UserID,
    userprojectmembership.ProjectID = ProjectID,

    await userprojectmembership.save();

    res.json(userprojectmembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update UserProjectMembership information.' });
  }
}

// Function to delete a UserProjectMembership
async function deleteUserProjectMembership(req, res) {
  try {
    const { UserProjectMembershipId } = req.body;

    // Find and remove the UserProjectMembership by UserProjectMembershipId
    const deletedUserProjectMembership = await UserProjectMembership.findByIdAndRemove(UserProjectMembershipId);

    if (!deletedUserProjectMembership) {
      return res.status(404).json({ error: 'UserProjectMembership not found.' });
    }

    res.json({ message: 'UserProjectMembership deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the UserProjectMembership.' });
  }
}
// Function to get all UserProjectMemberships
async function getAllUserProjectMemberships(req, res) {
  try {
    const userprojectmemberships = await UserProjectMembership.find();
    res.json(userprojectmemberships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch UserProjectMemberships.' });
  }
}

// Function to get a single UserProjectMembership by ID
async function getUserProjectMembershipById(req, res) {
  try {
    const { UserProjectMembershipId } = req.params;
    const userprojectmembership = await UserProjectMembership.findById(UserProjectMembershipId);

    if (!userprojectmembership) {
      return res.status(404).json({ error: 'UserProjectMembership not found.' });
    }

    res.json(userprojectmembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the UserProjectMembership.' });
  }
}

// Function to delete a UserProjectMembership by ID
async function deleteUserProjectMembershipById(req, res) {
  try {
    const { UserProjectMembershipId } = req.params;

    // Find and remove the UserProjectMembership by UserProjectMembershipId
    const deletedUserProjectMembership = await UserProjectMembership.findByIdAndRemove(UserProjectMembershipId);

    if (!deletedUserProjectMembership) {
      return res.status(404).json({ error: 'UserProjectMembership not found.' });
    }

    res.json({ message: 'UserProjectMembership deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the UserProjectMembership.' });
  }
}

export {
    registerUserProjectMembership,
  updateUserProjectMembership,
  getAllUserProjectMemberships,
  getUserProjectMembershipById,
  deleteUserProjectMembershipById,
};

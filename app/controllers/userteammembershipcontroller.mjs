import express from 'express';
import { UserTeamMembership } from '../schema/Schemas.mjs';

// Function to register a new UserTeamMembership
async function registerUserTeamMembership(req, res) {
  try {
    

    const { UserTeamMembershipID, UserID, TeamID } = req.body;
    //console.log(UserTeamMembershipID)
    console.log('Request Body:', req.body);


    // Create a new user record with the specified UserID
    const newUserTeamMembership = new UserTeamMembership({
      UserTeamMembershipID, 
      UserID, 
      TeamID
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
    const { UserTeamMembershipID } = req.body;
    console.log(UserTeamMembershipID)
    console.log(UserTeamMembershipID)

    // Find the Team by TeamId
    const userteammembership = await UserTeamMembership.findById(UserTeamMembershipID);

    if (!userteammembership) {
      return res.status(404).json({ error: 'userteammembership not found.' });
    }

    // Update user fields
    userteammembership.UserTeamMembershipID = UserTeamMembershipID,

    await userteammembership.save();

    res.json(userteammembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update userteammembership information.' });
  }
}



// Function to delete a team
async function deleteUserTeamMembershipID(req, res) {
  try {
    const { UserTeamMembershipId } = req.params;
    console.log(UserTeamMembershipId);
    console.log(req.params);

    // Find and remove the team by TeamId
    const deletedUserTeamMembership = await UserTeamMembership.findByIdAndRemove(UserTeamMembershipmId);

    if (!deletedUserTeamMembership) {
      return res.status(404).json({ error: 'UserTeamMembership not found.' });
    }

    res.json({ message: 'UserTeamMembership deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the UserTeamMembership.' });
  }
}
// Function to get all teams
async function getAllUserTeamMembership(req, res) {
  try {
    const userteammemberships = await UserTeamMembership.find();
    res.json(userteammemberships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch userteammemberships.' });
  }
}

// Function to get a single team by ID
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

// Function to delete a team by ID
async function deleteUserTeamMembershipById(req, res) {
  try {
  const { UserTeamMembershipID } = req.body;
    console.log(UserTeamMembershipID);
    console.log(req.body);

    // Find and remove the user by UserId
    const deletedUserTeamMembership = await UserTeamMembership.findByIdAndRemove(UserTeamMembershipID);

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
  getAllUserTeamMembership,
  getUserTeamMembershipById,
  deleteUserTeamMembershipById

};

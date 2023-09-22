import express from 'express';
import { Team } from '../schema/Schemas.mjs';

async function registerTeam(req, res) {
  try {
    const { TeamName, TeamLeaderID } = req.body;

    // Create a new team record without populating TeamLeaderID
    const newTeam = new Team({
      TeamName,
      TeamLeaderID, // Assuming TeamLeaderID is provided in the request body
    });

    // Save the new team
    await newTeam.save();

    // Respond with the newly created team, including its ID
    res.status(201).json({
      _id: newTeam._id, // Include the team's ID in the response
      TeamName: newTeam.TeamName,
      __v: newTeam.__v,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the team.' });
  }
}

// Function to register a new user
async function updateTeam(req, res) {
  try {
    const { TeamID, TeamName } = req.body;

    // Find the Team by TeamId
    const team = await Team.findById(TeamID);

    if (!team) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    // Update team fields
    team.TeamName = TeamName;

    // Populate the team leader's details
    await team.populate('TeamLeaderID').execPopulate();

    await team.save();

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update team information.' });
  }
}

// Function to delete a team

async function deleteTeam(req, res) {
  try {
    const { TeamId } = req.params;
    console.log(req.params);
    console.log(TeamId);

    // Find the team by TeamId and populate the team leader's details
    const team = await Team.findById(TeamId).populate('TeamLeaderID');

    if (!team) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    // Now you have access to the team leader's details if needed
    const teamLeader = team.TeamLeaderID;

    // Delete the team
    const deletedTeam = await Team.findByIdAndRemove(TeamId);

    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.json({ message: 'Team deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the team.' });
  }
}

// Function to get all teams
async function getAllTeams(req, res) {
  try {
    const teams = await Team.find().populate('TeamLeaderID');
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch teams.' });
  }
}


// Function to get a single team by ID with team leader details populated
async function getTeamById(req, res) {
  try {
    const { TeamId } = req.params;
    const team = await Team.findById(TeamId).populate('TeamLeaderID');

    if (!team) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the team.' });
  }
}

// Function to delete a team by ID
async function deleteTeamById(req, res) {
  try {
  const { TeamID } = req.body;
    console.log(TeamID);
    console.log(req.body);

    // Find and remove the user by UserId
    const deletedTeam = await Team.findByIdAndRemove(TeamID);

    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.json({ message: 'Team deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Team.' });
  }
}

export {
  registerTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
  deleteTeamById,
};

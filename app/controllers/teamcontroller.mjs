import express from 'express';
import { Team } from '../schema/Schemas.mjs';

// Function to register a new Team
async function registerTeam(req, res) {
  try {
    

    const { TeamID, TeamName, TeamLeaderID } = req.body;
    console.log('Request Body:', req.body);

    // Create a new team record with the specified TeamID
    const newTeam = new Team({
        TeamID, // Manually set TeamID
        TeamName,
        TeamLeaderID,
    });

    await newTeam.save();

    res.status(201).json(newTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the Team.' });
  }
}

// Function to update Team information
async function updateTeam(req, res) {
  try {
    const { TeamId } = req.params;
    const { TeamName } = req.body;

    // Find the user by TeamId
    const team = await Team.findById(TeamId);

    if (!team) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Update Team fields
    team.TeamName = TeamName;

    await team.save();

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update Team information.' });
  }
}

// Function to delete a Team
async function deleteTeam(req, res) {
  try {
    const { TeamId } = req.body;

    // Find and remove the Team by TeamId
    const deletedTeam = await Team.findByIdAndRemove(TeamId);

    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.json({ message: 'Team deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Team.' });
  }
}
// Function to get all Teams
async function getAllTeams(req, res) {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch Teams.' });
  }
}

// Function to get a single Team by ID
async function getTeamById(req, res) {
  try {
    const { TeamId } = req.params;
    const team = await Team.findById(TeamId);

    if (!team) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the Team.' });
  }
}

// Function to delete a Team by ID
async function deleteTeamById(req, res) {
  try {
    const { TeamId } = req.params;

    // Find and remove the Team by TeamId
    const deletedTeam = await Team.findByIdAndRemove(TeamId);

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

import express from 'express';
import { Team } from '../schema/Schemas.mjs';

<<<<<<< HEAD
// Function to register a new Team
=======
// Function to register a new user
async function registerTeam(req, res) {
  try {
    

    const { TeamID, TeamName, TeamLeaderID } = req.body;
<<<<<<< HEAD
    console.log('Request Body:', req.body);

    // Create a new team record with the specified TeamID
    const newTeam = new Team({
        TeamID, // Manually set TeamID
        TeamName,
        TeamLeaderID,
=======
    console.log(TeamLeaderID)
    console.log('Request Body:', req.body);


    await newTeam.save();

    res.status(201).json(newTeam);
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    res.status(500).json({ error: 'Could not register the Team.' });
  }
}



// Function to update team information
async function updateTeam(req, res) {
  try {
    const { TeamID } = req.body;
    console.log(TeamID)
    console.log(TeamID)
    const { TeamName  } = req.body;

    // Find the Team by TeamId
    const team = await Team.findById(TeamID);

    if (!team) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    // Update user fields
    team.TeamName = TeamName,

    await team.save();

    res.json(team);
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    res.status(500).json({ error: 'Could not update Team information.' });
  }
}

// Function to delete a Team
async function deleteTeam(req, res) {
  try {
    const { TeamId } = req.body;

    // Find and remove the Team by TeamId
    res.status(500).json({ error: 'Could not update team information.' });
  }
}



// Function to delete a team
async function deleteTeam(req, res) {
  try {
    const { TeamId } = req.params;

    // Find and remove the team by TeamId
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80
    const deletedTeam = await Team.findByIdAndRemove(TeamId);

    if (!deletedTeam) {
      return res.status(404).json({ error: 'Team not found.' });
    }

    res.json({ message: 'Team deleted successfully.' });
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    res.status(500).json({ error: 'Could not delete the Team.' });
  }
}
// Function to get all Teams
=======
    res.status(500).json({ error: 'Could not delete the team.' });
  }
}
// Function to get all teams
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80
async function getAllTeams(req, res) {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    res.status(500).json({ error: 'Could not fetch Teams.' });
  }
}

// Function to get a single Team by ID
=======
    res.status(500).json({ error: 'Could not fetch teams.' });
  }
}

// Function to get a single team by ID
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80
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
<<<<<<< HEAD
    res.status(500).json({ error: 'Could not fetch the Team.' });
  }
}

// Function to delete a Team by ID
async function deleteTeamById(req, res) {
  try {
    const { TeamId } = req.params;

    // Find and remove the Team by TeamId
    const deletedTeam = await Team.findByIdAndRemove(TeamId);
=======
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
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80

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
<<<<<<< HEAD
    registerTeam,
    updateTeam,
    getAllTeams,
    getTeamById,
    deleteTeamById,
=======
  registerTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
  deleteTeamById,
>>>>>>> 3e03cd83a45d0935a98101cd90e1232dca532d80
};

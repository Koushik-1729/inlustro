<<<<<<< HEAD
import express from 'express';
import { TeamCustomMetrics } from '../schema/Schemas.mjs';

// Function to register a new TeamCustomMetrics
async function registerTeamCustomMetrics(req, res) {
  try {
    

    const { TeamCustomMetricsID, TeamID, CustomMetricsID, Value, Timestamp } = req.body;
    console.log('Request Body:', req.body);

    // Create a new team record with the specified TeamCustomMetricsID
    const newTeamCustomMetrics = new TeamCustomMetrics({
        TeamCustomMetricsID, 
        TeamID, 
        CustomMetricsID, 
        Value, 
        Timestamp,
    });

    await newTeamCustomMetrics.save();

    res.status(201).json(newTeamCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the TeamCustomMetrics.' });
  }
}

// Function to update TeamCustomMetrics information
async function updateTeamCustomMetrics(req, res) {
  try {
    const { TeamCustomMetricsId } = req.params;
    const { TeamID, CustomMetricsID, Value, Timestamp } = req.body;

    // Find the user by TeamCustomMetricsId
    const teamcustommetrics = await TeamCustomMetrics.findById(TeamCustomMetricsId);

    if (!teamcustommetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    // Update TeamCustomMetrics fields
    teamcustommetrics.TeamID = TeamID;
    teamcustommetrics.CustomMetricsID = CustomMetricsID;
    teamcustommetrics.Value = Value;
    teamcustommetrics.Timestamp = Timestamp;

    await teamcustommetrics.save();

    res.json(teamcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update TeamCustomMetrics information.' });
  }
}

// Function to delete a TeamCustomMetrics
async function deleteTeamCustomMetrics(req, res) {
  try {
    const { TeamCustomMetricsId } = req.body;

    // Find and remove the TeamCustomMetrics by TeamCustomMetricsId
    const deletedTeamCustomMetrics = await TeamCustomMetrics.findByIdAndRemove(TeamCustomMetricsId);

    if (!deletedTeamCustomMetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    res.json({ message: 'TeamCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the TeamCustomMetrics.' });
  }
}
// Function to get all TeamCustomMetricss
async function getAllTeamCustomMetricss(req, res) {
  try {
    const teamcustommetricss = await TeamCustomMetrics.find();
    res.json(teamcustommetricss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch TeamCustomMetrics.' });
  }
}

// Function to get a single TeamCustomMetrics by ID
async function getTeamCustomMetricsById(req, res) {
  try {
    const { TeamCustomMetricsId } = req.params;
    const teamcustommetrics = await TeamCustomMetrics.findById(TeamCustomMetricsId);

    if (!teamcustommetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    res.json(teamcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the TeamCustomMetrics.' });
  }
}

// Function to delete a TeamCustomMetrics by ID
async function deleteTeamCustomMetricsById(req, res) {
  try {
    const { TeamCustomMetricsId } = req.params;

    // Find and remove the TeamCustomMetrics by TeamCustomMetricsId
    const deletedTeamCustomMetrics = await TeamCustomMetrics.findByIdAndRemove(TeamCustomMetricsId);

    if (!deletedTeamCustomMetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    res.json({ message: 'TeamCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the TeamCustomMetrics.' });
  }
}

export {
    registerTeamCustomMetrics,
  updateTeamCustomMetrics,
  getAllTeamCustomMetricss,
  getTeamCustomMetricsById,
  deleteTeamCustomMetricsById,
};
=======
import express from 'express';
import { TeamCustomMetrics } from '../schema/Schemas.mjs';

// Function to register a new TeamCustomMetrics
async function registerTeamCustomMetrics(req, res) {
  try {
    

    const { TeamCustomMetricsID, TeamID, CustomMetricsID, Value, Timestamp } = req.body;
    console.log('Request Body:', req.body);

    // Create a new team record with the specified TeamCustomMetricsID
    const newTeamCustomMetrics = new TeamCustomMetrics({
        TeamCustomMetricsID, 
        TeamID, 
        CustomMetricsID, 
        Value, 
        Timestamp,
    });

    await newTeamCustomMetrics.save();

    res.status(201).json(newTeamCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the TeamCustomMetrics.' });
  }
}

// Function to update TeamCustomMetrics information
async function updateTeamCustomMetrics(req, res) {
  try {
    const { TeamCustomMetricsId } = req.params;
    const { TeamID, CustomMetricsID, Value, Timestamp } = req.body;

    // Find the user by TeamCustomMetricsId
    const teamcustommetrics = await TeamCustomMetrics.findById(TeamCustomMetricsId);

    if (!teamcustommetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    // Update TeamCustomMetrics fields
    teamcustommetrics.TeamID = TeamID;
    teamcustommetrics.CustomMetricsID = CustomMetricsID;
    teamcustommetrics.Value = Value;
    teamcustommetrics.Timestamp = Timestamp;

    await teamcustommetrics.save();

    res.json(teamcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update TeamCustomMetrics information.' });
  }
}

// Function to delete a TeamCustomMetrics
async function deleteTeamCustomMetrics(req, res) {
  try {
    const { TeamCustomMetricsId } = req.body;

    // Find and remove the TeamCustomMetrics by TeamCustomMetricsId
    const deletedTeamCustomMetrics = await TeamCustomMetrics.findByIdAndRemove(TeamCustomMetricsId);

    if (!deletedTeamCustomMetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    res.json({ message: 'TeamCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the TeamCustomMetrics.' });
  }
}
// Function to get all TeamCustomMetricss
async function getAllTeamCustomMetricss(req, res) {
  try {
    const teamcustommetricss = await TeamCustomMetrics.find();
    res.json(teamcustommetricss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch TeamCustomMetrics.' });
  }
}

// Function to get a single TeamCustomMetrics by ID
async function getTeamCustomMetricsById(req, res) {
  try {
    const { TeamCustomMetricsId } = req.params;
    const teamcustommetrics = await TeamCustomMetrics.findById(TeamCustomMetricsId);

    if (!teamcustommetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    res.json(teamcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the TeamCustomMetrics.' });
  }
}

// Function to delete a TeamCustomMetrics by ID
async function deleteTeamCustomMetricsById(req, res) {
  try {
    const { TeamCustomMetricsId } = req.params;

    // Find and remove the TeamCustomMetrics by TeamCustomMetricsId
    const deletedTeamCustomMetrics = await TeamCustomMetrics.findByIdAndRemove(TeamCustomMetricsId);

    if (!deletedTeamCustomMetrics) {
      return res.status(404).json({ error: 'TeamCustomMetrics not found.' });
    }

    res.json({ message: 'TeamCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the TeamCustomMetrics.' });
  }
}

export {
    registerTeamCustomMetrics,
  updateTeamCustomMetrics,
  getAllTeamCustomMetricss,
  getTeamCustomMetricsById,
  deleteTeamCustomMetricsById,
};
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

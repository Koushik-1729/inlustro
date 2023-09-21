import express from 'express';
import { ProjectCustomMetrics } from '../schema/Schemas.mjs';

// Function to register a new ProjectCustomMetrics
async function registerProjectCustomMetrics(req, res) {
  try {
    

    const { ProjectCustomMetricsID, ProjectID, CustomMetricsID, Value, Timestamp } = req.body;
    console.log('Request Body:', req.body);

    // Create a new Project record with the specified ProjectCustomMetricsID
    const newProjectCustomMetrics = new ProjectCustomMetrics({
        ProjectCustomMetricsID, 
        ProjectID, 
        CustomMetricsID, 
        Value, 
        Timestamp,
    });

    await newProjectCustomMetrics.save();

    res.status(201).json(newProjectCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the ProjectCustomMetrics.' });
  }
}

// Function to update ProjectCustomMetrics information
async function updateProjectCustomMetrics(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.params;
    const { ProjectID, CustomMetricsID, Value, Timestamp } = req.body;

    // Find the user by ProjectCustomMetricsId
    const projectcustommetrics = await ProjectCustomMetrics.findById(ProjectCustomMetricsId);

    if (!projectcustommetrics) {
      return res.status(404).json({ error: 'ProjectCustomMetrics not found.' });
    }

    // Update ProjectCustomMetrics fields
    projectcustommetrics.ProjectID = ProjectID;
    projectcustommetrics.CustomMetricsID = CustomMetricsID;
    projectcustommetrics.Value = Value;
    projectcustommetrics.Timestamp = Timestamp;

    await projectcustommetrics.save();

    res.json(projectcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update ProjectCustomMetrics information.' });
  }
}

// Function to delete a ProjectCustomMetrics
async function deleteProjectCustomMetrics(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.body;

    // Find and remove the ProjectCustomMetrics by ProjectCustomMetricsId
    const deletedProjectCustomMetrics = await ProjectCustomMetrics.findByIdAndRemove(ProjectCustomMetricsId);

    if (!deletedProjectCustomMetrics) {
      return res.status(404).json({ error: 'ProjectCustomMetrics not found.' });
    }

    res.json({ message: 'ProjectCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the ProjectCustomMetrics.' });
  }
}
// Function to get all ProjectCustomMetricss
async function getAllProjectCustomMetricss(req, res) {
  try {
    const projectcustommetricss = await ProjectCustomMetrics.find();
    res.json(projectcustommetricss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch ProjectCustomMetrics.' });
  }
}

// Function to get a single ProjectCustomMetrics by ID
async function getProjectCustomMetricsById(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.params;
    const projectcustommetrics = await ProjectCustomMetrics.findById(ProjectCustomMetricsId);

    if (!projectcustommetrics) {
      return res.status(404).json({ error: 'ProjectCustomMetrics not found.' });
    }

    res.json(projectcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the ProjectCustomMetrics.' });
  }
}

// Function to delete a ProjectCustomMetrics by ID
async function deleteProjectCustomMetricsById(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.params;

    // Find and remove the ProjectCustomMetrics by ProjectCustomMetricsId
    const deletedProjectCustomMetrics = await ProjectCustomMetrics.findByIdAndRemove(ProjectCustomMetricsId);

    if (!deletedProjectCustomMetrics) {
      return res.status(404).json({ error: 'ProjectCustomMetrics not found.' });
    }

    res.json({ message: 'ProjectCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the ProjectCustomMetrics.' });
  }
}

export {
    registerProjectCustomMetrics,
  updateProjectCustomMetrics,
  getAllProjectCustomMetricss,
  getProjectCustomMetricsById,
  deleteProjectCustomMetricsById,
};

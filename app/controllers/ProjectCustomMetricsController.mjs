import express from 'express';
import { ProjectCustomMetrics,Project,CustomMetrics } from '../schema/Schemas.mjs';

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


async function updateProjectCustomMetrics(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.params;
    const { ProjectID, CustomMetricsID, Value, Timestamp } = req.body;

  
    const projectcustommetrics = await ProjectCustomMetrics.findById(ProjectCustomMetricsId);

    if (!projectcustommetrics) {
      return res.status(404).json({ error: 'ProjectCustomMetrics not found.' });
    }

 
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


async function deleteProjectCustomMetrics(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.body;

  
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

async function getAllProjectCustomMetrics(req, res) {
  try {
    const projectcustommetrics = await ProjectCustomMetrics.find()
    .populate({
      path:'ProjectID',
      model:'Project'
    })  // Populate the ProjectID field
    .populate({
      path:"CustomMetricsID",
      model:CustomMetrics,
    }) // Populate the CustomMetricsID field
      .exec();
    res.json(projectcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch ProjectCustomMetrics.' });
  }
}


async function getProjectCustomMetricsById(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.params;
    const projectcustommetrics = await ProjectCustomMetrics.findById(ProjectCustomMetricsId)
      .populate({
        path:'ProjectID',
        model:Project
      }) // Populate the ProjectID field
      .populate({
        path:"CustomMetricsID",
        model:CustomMetrics,
      }) // Populate the CustomMetricsID field
      .exec();

    if (!projectcustommetrics) {
      return res.status(404).json({ error: 'ProjectCustomMetrics not found.' });
    }

    res.json(projectcustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the ProjectCustomMetrics.' });
  }
}


async function deleteProjectCustomMetricsById(req, res) {
  try {
    const { ProjectCustomMetricsId } = req.params;

    
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
  getAllProjectCustomMetrics,
  getProjectCustomMetricsById,
  deleteProjectCustomMetricsById,
};

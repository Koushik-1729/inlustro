import express from 'express';
import { Project } from '../schema/Schemas.mjs';

// Function to register a new Project
async function registerProject(req, res) {
  try {
    

    const { ProjectID, ProjectName, ProjectManagerID } = req.body;
    console.log('Request Body:', req.body);

    // Create a new project record with the specified ProjectID
    const newProject = new Project({
        ProjectID, // Manually set ProjectID
        ProjectName,
        ProjectManagerID,
    });

    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the Project.' });
  }
}

// Function to update Project information
async function updateProject(req, res) {
  try {
    const { ProjectId } = req.params;
    const { ProjectName } = req.body;

    // Find the project by ProjectId
    const project = await Project.findById(ProjectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    // Update Project fields
    project.ProjectName = ProjectName;

    await project.save();

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update Project information.' });
  }
}


async function deleteProject(req, res) {
  try {
    const { ProjectId } = req.params;

    // Find and remove the Project by ProjectId
    const deletedProject = await Project.findByIdAndRemove(ProjectId);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    res.json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Project.' });
  }
}
// Function to get all Projects
async function getAllProjects(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch Projects.' });
  }
}

// Function to get a single Project by ID
async function getProjectById(req, res) {
  try {
    const { ProjectId } = req.params;
    const project = await Project.findById(ProjectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the Project.' });
  }
}

// Function to delete a Project by ID
async function deleteProjectById(req, res) {
  try {
    const { ProjectId } = req.params;

    // Find and remove the Project by ProjectId
    const deletedProject = await Project.findByIdAndRemove(ProjectId);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found.' });
    }

    res.json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the Project.' });
  }
}

export {
    registerProject,
  updateProject,
  getAllProjects,
  getProjectById,
  deleteProjectById
};

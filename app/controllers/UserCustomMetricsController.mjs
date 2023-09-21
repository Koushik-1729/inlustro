import express from 'express';
import { UserCustomMetrics } from '../schema/Schemas.mjs';

// Function to register a new UserCustomMetrics
async function registerUserCustomMetrics(req, res) {
  try {
    

    const { UserCustomMetricsID, UserID, CustomMetricsID, Value, Timestamp } = req.body;
    console.log('Request Body:', req.body);

    // Create a new team record with the specified UserCustomMetricsID
    const newUserCustomMetrics = new UserCustomMetrics({
        UserCustomMetricsID, 
        UserID, 
        CustomMetricsID, 
        Value, 
        Timestamp,
    });

    await newUserCustomMetrics.save();

    res.status(201).json(newUserCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the UserCustomMetrics.' });
  }
}

// Function to update UserCustomMetrics information
async function updateUserCustomMetrics(req, res) {
  try {
    const { UserCustomMetricsId } = req.params;
    const { UserID, CustomMetricsID, Value, Timestamp } = req.body;

    // Find the user by CustomMetricsId
    const usercustommetrics = await UserCustomMetrics.findById(UserCustomMetricsId);

    if (!usercustommetrics) {
      return res.status(404).json({ error: 'UserCustomMetrics not found.' });
    }

    // Update UserCustomMetrics fields
    usercustommetrics.UserID = UserID;
    usercustommetrics.CustomMetricsID = CustomMetricsID;
    usercustommetrics.Value = Value;
    usercustommetrics.Timestamp = Timestamp;

    await usercustommetrics.save();

    res.json(usercustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update UserCustomMetrics information.' });
  }
}

// Function to delete a UserCustomMetrics
async function deleteUserCustomMetrics(req, res) {
  try {
    const { UserCustomMetricsId } = req.body;

    // Find and remove the UserCustomMetrics by UserCustomMetricsId
    const deletedUserCustomMetrics = await UserCustomMetrics.findByIdAndRemove(UserCustomMetricsId);

    if (!deletedUserCustomMetrics) {
      return res.status(404).json({ error: 'UserCustomMetrics not found.' });
    }

    res.json({ message: 'UserCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the UserCustomMetrics.' });
  }
}
// Function to get all UserCustomMetricss
async function getAllUserCustomMetricss(req, res) {
  try {
    const usercustommetricss = await UserCustomMetrics.find();
    res.json(usercustommetricss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch vCustomMetrics.' });
  }
}

// Function to get a single UserCustomMetrics by ID
async function getUserCustomMetricsById(req, res) {
  try {
    const { UserCustomMetricsId } = req.params;
    const usercustommetrics = await UserCustomMetrics.findById(UserCustomMetricsId);

    if (!usercustommetrics) {
      return res.status(404).json({ error: 'UserCustomMetrics not found.' });
    }

    res.json(usercustommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the UserCustomMetrics.' });
  }
}

// Function to delete a UserCustomMetrics by ID
async function deleteUserCustomMetricsById(req, res) {
  try {
    const { UserCustomMetricsId } = req.params;

    // Find and remove the UserCustomMetrics by UserCustomMetricsId
    const deletedUserCustomMetrics = await UserCustomMetrics.findByIdAndRemove(UserCustomMetricsId);

    if (!deletedUserCustomMetrics) {
      return res.status(404).json({ error: 'UserCustomMetrics not found.' });
    }

    res.json({ message: 'UserCustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the UserCustomMetrics.' });
  }
}

export {
    registerUserCustomMetrics,
  updateUserCustomMetrics,
  getAllUserCustomMetricss,
  getUserCustomMetricsById,
  deleteUserCustomMetricsById,
};

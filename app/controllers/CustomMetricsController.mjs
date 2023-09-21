import express from 'express';
import { CustomMetrics } from '../schema/Schemas.mjs';

// Function to register a new TeamCustomMetrics
async function registerCustomMetrics(req, res) {
  try {
    

    const { CustomMetricsID, MetricName, MetricType, Description } = req.body;
    console.log('Request Body:', req.body);

    // Create a new team record with the specified CustomMetricsID
    const newCustomMetrics = new CustomMetrics({
        CustomMetricsID, 
        MetricName, 
        MetricType, 
        Description,
    });

    await newCustomMetrics.save();

    res.status(201).json(newCustomMetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the CustomMetrics.' });
  }
}

// Function to update CustomMetrics information
async function updateCustomMetrics(req, res) {
  try {
    const { CustomMetricsId } = req.params;
    const { MetricName, MetricType, Description } = req.body;

    // Find the user by CustomMetricsId
    const custommetrics = await CustomMetrics.findById(CustomMetricsId);

    if (!custommetrics) {
      return res.status(404).json({ error: 'CustomMetrics not found.' });
    }

    // Update CustomMetrics fields
    custommetrics.MetricName = MetricName;
    custommetrics.MetricType = MetricType;
    custommetrics.Description = Description;

    await custommetrics.save();

    res.json(custommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update CustomMetrics information.' });
  }
}

// Function to delete a CustomMetrics
async function deleteCustomMetrics(req, res) {
  try {
    const { CustomMetricsId } = req.body;

    // Find and remove the CustomMetrics by CustomMetricsId
    const deletedCustomMetrics = await CustomMetrics.findByIdAndRemove(CustomMetricsId);

    if (!deletedCustomMetrics) {
      return res.status(404).json({ error: 'CustomMetrics not found.' });
    }

    res.json({ message: 'CustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the CustomMetrics.' });
  }
}
// Function to get all CustomMetricss
async function getAllCustomMetricss(req, res) {
  try {
    const custommetricss = await CustomMetrics.find();
    res.json(custommetricss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch CustomMetrics.' });
  }
}

// Function to get a single CustomMetrics by ID
async function getCustomMetricsById(req, res) {
  try {
    const { CustomMetricsId } = req.params;
    const custommetrics = await CustomMetrics.findById(CustomMetricsId);

    if (!custommetrics) {
      return res.status(404).json({ error: 'CustomMetrics not found.' });
    }

    res.json(custommetrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the CustomMetrics.' });
  }
}

// Function to delete a CustomMetrics by ID
async function deleteCustomMetricsById(req, res) {
  try {
    const { CustomMetricsId } = req.params;

    // Find and remove the CustomMetrics by CustomMetricsId
    const deletedCustomMetrics = await CustomMetrics.findByIdAndRemove(CustomMetricsId);

    if (!deletedCustomMetrics) {
      return res.status(404).json({ error: 'CustomMetrics not found.' });
    }

    res.json({ message: 'CustomMetrics deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the CustomMetrics.' });
  }
}

export {
    registerCustomMetrics,
  updateCustomMetrics,
  getAllCustomMetricss,
  getCustomMetricsById,
  deleteCustomMetricsById,
};

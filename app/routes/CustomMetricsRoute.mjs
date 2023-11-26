import express from 'express';

import {registerCustomMetrics,
  updateCustomMetrics,
  getAllCustomMetricss,
  getCustomMetricsById,
  deleteCustomMetricsById,

} from '../controllers/CustomMetricsController.mjs';
const router =express.Router();
router.post('/register', registerCustomMetrics);
router.put('/custommetrics/:CustomMetricsId', updateCustomMetrics);
router.get('/custommetrics', getAllCustomMetricss);
router.get('/custommetrics/:CustomMetricsId', getCustomMetricsById);
router.delete('/custommetrics/:CustomMetricsId', deleteCustomMetricsById);

export default router;

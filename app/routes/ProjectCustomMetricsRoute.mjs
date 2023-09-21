import express from 'express';

import {registerProjectCustomMetrics,
  updateProjectCustomMetrics,
  getAllProjectCustomMetricss,
  getProjectCustomMetricsById,
  deleteProjectCustomMetricsById,

} from '../controllers/ProjectCustomMetricsController.mjs';
const router =express.Router();
router.post('/register', registerProjectCustomMetrics);
router.put('/projectcustommetrics/:ProjectCustomMetricsId', updateProjectCustomMetrics);
router.get('/projectcustommetrics', getAllProjectCustomMetricss);
router.get('/projectcustommetrics/:ProjectCustomMetricsId', getProjectCustomMetricsById);
router.delete('/projectcustommetrics/:ProjectCustomMetricsId', deleteProjectCustomMetricsById);

export default router;

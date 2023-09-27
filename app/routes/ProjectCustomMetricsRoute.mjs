import express from 'express';

import {registerProjectCustomMetrics,
  updateProjectCustomMetrics,
  getAllProjectCustomMetrics,
  getProjectCustomMetricsById,
  deleteProjectCustomMetricsById,

} from '../controllers/ProjectCustomMetricsController.mjs';
const router =express.Router();
router.post('/register', registerProjectCustomMetrics);
router.put('/projectcustommetrics/:ProjectCustomMetricsId', updateProjectCustomMetrics);
router.get('/projectcustommetrics', getAllProjectCustomMetrics);
router.get('/projectcustommetrics/:ProjectCustomMetricsId', getProjectCustomMetricsById);
router.delete('/projectcustommetrics/:ProjectCustomMetricsId', deleteProjectCustomMetricsById);

export default router;

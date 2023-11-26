<<<<<<< HEAD
import express from 'express';

import {registerTeamCustomMetrics,
  updateTeamCustomMetrics,
  getAllTeamCustomMetricss,
  getTeamCustomMetricsById,
  deleteTeamCustomMetricsById,

} from '../controllers/TeamCustomMetricsController.mjs';
const router =express.Router();
router.post('/register', registerTeamCustomMetrics);
router.put('/teamcustommetrics/:TeamCustomMetricsId', updateTeamCustomMetrics);
router.get('/teamcustommetrics', getAllTeamCustomMetricss);
router.get('/teamcustommetrics/:TeamCustomMetricsId', getTeamCustomMetricsById);
router.delete('/teamcustommetrics/:TeamCustomMetricsId', deleteTeamCustomMetricsById);

export default router;
=======
import express from 'express';

import {registerTeamCustomMetrics,
  updateTeamCustomMetrics,
  getAllTeamCustomMetricss,
  getTeamCustomMetricsById,
  deleteTeamCustomMetricsById,

} from '../controllers/TeamCustomMetricsController.mjs';
const router =express.Router();
router.post('/register', registerTeamCustomMetrics);
router.put('/teamcustommetrics/:TeamCustomMetricsId', updateTeamCustomMetrics);
router.get('/teamcustommetrics', getAllTeamCustomMetricss);
router.get('/teamcustommetrics/:TeamCustomMetricsId', getTeamCustomMetricsById);
router.delete('/teamcustommetrics/:TeamCustomMetricsId', deleteTeamCustomMetricsById);

export default router;
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84

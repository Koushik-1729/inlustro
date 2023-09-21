import express from 'express';

import {registerUserCustomMetrics,
  updateUserCustomMetrics,
  getAllUserCustomMetricss,
  getUserCustomMetricsById,
  deleteUserCustomMetricsById,

} from '../controllers/UserCustomMetricsController.mjs';
const router =express.Router();
router.post('/register', registerUserCustomMetrics);
router.put('/usercustommetrics/:UserCustomMetricsId', updateUserCustomMetrics);
router.get('/usercustommetrics', getAllUserCustomMetricss);
router.get('/usercustommetrics/:UserCustomMetricsId', getUserCustomMetricsById);
router.delete('/usercustommetrics/:UserCustomMetricsId', deleteUserCustomMetricsById);

export default router;


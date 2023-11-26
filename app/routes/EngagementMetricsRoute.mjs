import express from 'express';
import {
  createEngagementMetrics,
  updateEngagementMetrics,
  deleteEngagementMetrics,
  getAllEngagementMetrics,
  getEngagementMetricsById,
} from '../controllers/EngagementMetrics.mjs'; 
const router = express.Router();
router.post('/engagementmetrics', createEngagementMetrics);
router.put('/engagementmetrics/:EngagementMetricsID', updateEngagementMetrics);
router.delete('/engagementmetrics/:EngagementMetricsID', deleteEngagementMetrics);
router.get('/engagementmetrics', getAllEngagementMetrics);
router.get('/engagementmetrics/:EngagementMetricsID', getEngagementMetricsById);

export default router;

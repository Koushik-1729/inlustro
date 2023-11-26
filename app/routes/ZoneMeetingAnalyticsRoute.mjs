import express from 'express';
import {
  createZoneMeetingAnalytics,
  getAllZoneMeetingAnalytics,
  getZoneMeetingAnalyticsById,
  updateZoneMeetingAnalytics,
  deleteZoneMeetingAnalytics,
} from '../controllers/ZoneMeetingAnalyticsController.mjs'; 

const router = express.Router();
router.post('/zonemeeting-analytics', createZoneMeetingAnalytics);
router.get('/zonemeetinganalytics', getAllZoneMeetingAnalytics);
router.get('/zonemeetinganalytics/:zoneMeetingAnalyticsId', getZoneMeetingAnalyticsById);
router.put('/zonemeetinganalytics/:zoneMeetingAnalyticsId', updateZoneMeetingAnalytics);
router.delete('/zonemeetinganalytics/:zoneMeetingAnalyticsId', deleteZoneMeetingAnalytics);
export default router;

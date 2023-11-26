import express from 'express';
import {
  createZoneCustomMetrics,
  getAllZoneCustomMetrics,
  getZoneCustomMetricsById,
  updateZoneCustomMetrics,
  deleteZoneCustomMetrics,
} from '../controllers/ZoneCustomMetricsController.mjs'; 

const router = express.Router();
router.post('/zonecustom-metrics', createZoneCustomMetrics);
router.get('/zonecustommetrics', getAllZoneCustomMetrics);
router.get('/zonecustommetrics/:zoneCustomMetricsId', getZoneCustomMetricsById);
router.put('/zonecustommetrics/:zoneCustomMetricsId', updateZoneCustomMetrics);
router.delete('/zonecustommetrics/:zoneCustomMetricsId', deleteZoneCustomMetrics);
export default router;

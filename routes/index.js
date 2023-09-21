import express from 'express';
import createShopHandler from '../middleware/shopHandler.js';

const router = express.Router();

// Send to JOI middleware for validation
router.route('/get/shops')
  .get(createShopHandler);

export default router;    
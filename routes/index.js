import express from 'express';
import createShopHandler from '../middleware/shopHandler.js';

const router = express.Router();

router.route('/get/shops')
  .get(createShopHandler);

export default router;    
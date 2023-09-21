import express from 'express';

const router = express.Router();

router.route('/get/shops')
  .get((req, res) => {
    res.json({ "success": true }).status(200);
  });

export default router;    
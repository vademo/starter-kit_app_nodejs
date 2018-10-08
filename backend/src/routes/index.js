import path from 'path';
import express from 'express';
import {} from 'dotenv/config';
import example from './example';

const FRONTEND_BUILD_PATH = path.join(__dirname, '../../../frontend/build');

const router = express.Router();

router.use('/api/examples', example);

router.use(express.static(FRONTEND_BUILD_PATH));

router.get('*', (req, res) => {
  res.sendFile(path.join(FRONTEND_BUILD_PATH, 'index.html'));
});

export default router;

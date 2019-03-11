import express from 'express';
import { getStatus } from '../controllers/status';

const router = new express.Router();

router.get('/', getStatus);

export default router;

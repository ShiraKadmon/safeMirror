import express from 'express';
import { getawarenessNotification } from '../controllers/awarenessNotificationController.js';

const router = express.Router();


router.get('/awarenessNotification', getawarenessNotification);

export default router;

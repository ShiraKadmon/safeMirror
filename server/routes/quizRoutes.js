import express from 'express';
import { getPositiveQuestion, getEmpoweringResponse } from '../controllers/QuizController.js';

const router = express.Router();

router.post('/question', getPositiveQuestion);
router.post('/response', getEmpoweringResponse);

export default router;
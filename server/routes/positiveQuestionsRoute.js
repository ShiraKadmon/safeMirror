import express from 'express';
import { getPositiveQuestion } from '../controllers/positiveQuestionsController.js';

const router = express.Router();

router.post('/positive-questions', getPositiveQuestion);

export default router;
import express from 'express';
import { getResponseFromGemini } from '../controllers/chatController.js'; 

const router = express.Router();

router.post('/', async (req, res) => {
    const { userMessage, userAge } = req.body;  
    const reply = await getResponseFromGemini(userMessage, userAge);
    
    res.json({ reply });
});

export default router;

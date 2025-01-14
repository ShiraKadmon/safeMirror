import express from 'express';
import { getResponseFromGemini } from '../controllers/chatController.js'; 

const router = express.Router();

router.post('/', async (req, res) => {
    const { userMessage, userAge } = req.body;
    
    if (!userMessage || !userAge) {
        return res.status(400).json({ error: 'Missing required fields: userMessage or userAge' });
    }

    try {
        const reply = await getResponseFromGemini(userMessage, userAge);
        res.json({ reply });
    } catch {
        res.status(500).json({ error: 'Error processing the request' });
    }
});

export default router;

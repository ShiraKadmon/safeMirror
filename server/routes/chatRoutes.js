import express from 'express';
import { getResponseFromGemini } from '../controllers/chatController.js'; 

const router = express.Router();

router.post('/', async (req, res) => {
    const { messages, userAge } = req.body;
 
    if (!messages || !userAge) {
        return res.status(400).json({ error: 'Missing required fields: messages or userAge' });
    }

    try {
        const reply = await getResponseFromGemini(messages, userAge);
        res.json({ reply });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error processing the request' });
    }
});

export default router;
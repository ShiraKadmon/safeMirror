import express from 'express';
import { sendNotification } from '../controllers/notificationController.js'; 

const router = express.Router();

router.post('/send', async (req, res) => {
  const { to, message } = req.body;
 
  if (!to || !message) {
    return res.status(400).json({ error: 'Please provide a recipient and a message.' });
  }

  try {
    const result = await sendNotification(to, message);
    res.status(200).json({ success: true, message: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

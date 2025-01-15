import express from 'express';
import {createUser, loginUser} from '../controllers/userController.js';
import notification from '../models/notification.js';

const router = express.Router();

// POST a new User
router.post('/signup', createUser)

// POST exist User
router.post('/login', loginUser)

//TEST
router.get('/test-fetch', async (req, res) => {
    try {
        const messages = await notification.find({});
        console.log(messages);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;
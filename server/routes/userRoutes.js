import express from 'express';
import {createUser, loginUser} from '../controllers/userController.js';
import notification from '../models/notification.js';

const router = express.Router();

// POST a new User
router.post('/signup', createUser)

// POST exist User
router.post('/login', loginUser)


export default router;
import express from 'express';
import {
    createUser,
    loginUser,
    getUser,
    
    
} from '../controllers/userController.js';

const router = express.Router();

// POST a new User
router.post('/signup', createUser)

// POST exist User
router.post('/login', loginUser)

// GET a user
router.get('/:id', loginUser)

  
module.exports = router;
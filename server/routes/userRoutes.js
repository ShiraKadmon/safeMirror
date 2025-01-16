import express from 'express';
import {createUser, loginUser} from '../controllers/userController.js';
import { getUserByEmail , updateUserDetails , getNameByEmail} from '../controllers/userController.js';

const router = express.Router();

// POST a new User
router.post('/signup', createUser)

// POST exist User
router.post('/login', loginUser)

router.get('/details', getUserByEmail);

router.put("/update", updateUserDetails);

router.get('/name', getNameByEmail);


export default router;
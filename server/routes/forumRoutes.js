import express from 'express';
import { getAllPosts, createPost, addComment } from '../controllers/forumController.js';

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts', createPost);
router.post('/comments', addComment);

export default router;

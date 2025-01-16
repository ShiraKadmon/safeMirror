import Post from '../models/postModel.js';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
  }
};

// Create a new post
export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create post', details: error.message });
  }
};

// Add a comment to a post
export const addComment = async (req, res) => {
  const { postId, content } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.push({ content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add comment', details: error.message });
  }
};

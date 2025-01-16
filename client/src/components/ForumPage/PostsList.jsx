import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PostsList = ({ loading }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Loading the posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}forum/posts`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Unable to load posts. Please try again later.');
      }
    };

    fetchPosts();
  }, [loading]);

  // Add a comment to the post
  const handleAddComment = async (postId, commentContent) => {
    if (!commentContent.trim()) {
      alert('Comment cannot be empty');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}forum/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId, content: commentContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }

      const updatedPost = await response.json();

      // Updating the posts with the changed post
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === updatedPost._id ? updatedPost : post))
      );
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Error adding comment. Please try again.');
    }
  };

  if (loading) {
    return <div>טעינת פוסטים...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="forum-posts-list">
      {posts.map(post => (
        <div key={post._id} className="forum-post-container">
          <h3 className="forum-post-title">{post.title}</h3>
          <p className="forum-post-content">{post.content}</p>
          
          <div className="forum-comments">
            {post.comments.map((comment, index) => (
              <div key={index} className="forum-comment">
                {comment.content}
              </div>
            ))}
          </div>

          {/* Form to add a comment */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const commentContent = e.target.elements.commentContent.value;
              handleAddComment(post._id, commentContent);
              e.target.reset();
            }}
          >
            <input
              type="text"
              name="commentContent"
              className="forum-input"
              placeholder="הוסיפי תגובה..."
            />
            <button type="submit" className="forum-send-button">
              Add Comment
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

PostsList.propTypes = {
    loading: PropTypes.bool.isRequired,
  };

export default PostsList;

import { useState } from 'react';
import PropTypes from 'prop-types';

const AddPost = ({ setLoading }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
        alert("Title and content cannot be empty");
        return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}forum/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      setTitle('');
      setContent('');
      setLoading(false);
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Error adding post. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form className="forum-add-post-form" onSubmit={handleAddPost}>
      <input
        type="text"
        className="forum-input"
        placeholder="כותרת הפוסט"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="forum-input"
        placeholder="תוכן הפוסט"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="forum-send-button">
        הוספת פוסט
      </button>
    </form>
  );
};

AddPost.propTypes = {
    setLoading: PropTypes.func.isRequired,
  };

export default AddPost;

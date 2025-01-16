import { useState } from 'react';
import '../styles/ForumPage.css';
import AddPost from '../components/ForumPage/AddPost';
import PostsList from '../components/ForumPage/PostsList';
import forumIcon from "/src/assets/forum-icon2.webp";

const ForumPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="forum-container">
      <div className="forum-header">
        <h2>Forum</h2>
        <div className="forum-header-icon-container">
            <img src={forumIcon} alt="Forum Icon" className="forum-header-icon" />
        </div>
      </div>
      
      <div className="forum-posts">
        <PostsList loading={loading} />
      </div>

      <div className="forum-add-post">
        <AddPost setLoading={setLoading} />
      </div>
    </div>
  );
};

export default ForumPage;
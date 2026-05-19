import './Lesson07Styles.css';
import { getPosts } from './api.js';
import { useEffect, useState } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAndSetPosts() {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error.message);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    }
    fetchAndSetPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {loading && <p>Loading posts...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading &&
          !error &&
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        {/* TODO: Replace me with fetched data when the component renders */}
      </div>
    </div>
  );
}

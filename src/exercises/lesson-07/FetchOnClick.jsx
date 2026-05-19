import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleFetchClick() {
    try {
      setError(null);
      setLoading(true);
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      console.error(error.message);
      setError('Failed to fetch the post');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button className="button" onClick={handleFetchClick} disabled={loading}>
        {loading ? 'Loading...' : 'GetPost'}
      </button>

      <div className="content">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {post && (
          <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

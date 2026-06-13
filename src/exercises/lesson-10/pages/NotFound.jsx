import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <section style={{ padding: '10px 0' }}>
      <h2>404: Not Found</h2>
      <p>
        The path <code>{location.pathname}</code> does not exist or requires
        authetication.
      </p>
      <div style={{ marginTop: 12 }}>
        <Link
          to="/lessons/lesson-10"
          style={{ color: '#0066cc', fontWeight: 600, textDecoration: 'none' }}
        >
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}

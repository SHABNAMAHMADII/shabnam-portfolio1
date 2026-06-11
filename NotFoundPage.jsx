import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-emoji">🔍</span>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
          <div className="not-found-buttons">
            <button onClick={() => navigate('/')} className="home-btn">
              🏠 Go Home
            </button>
            <button onClick={() => navigate(-1)} className="back-btn">
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
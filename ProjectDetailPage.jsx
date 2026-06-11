import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import { useFavorites } from '../contexts/FavoritesContext';
import TechBadge from '../components/TechBadge';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="page-container">
        <div className="not-found">
          <h2>❌ Project Not Found</h2>
          <p>Sorry, we couldn't find the project you're looking for.</p>
          <button onClick={() => navigate('/projects')} className="back-btn">
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="project-detail-page">
        <button onClick={() => navigate('/projects')} className="back-btn">
          ← Back to Projects
        </button>

        <div className="project-detail-card">
          <div 
            className="project-detail-image"
            style={{ background: project.bgGradient }}
          >
            <span className="project-detail-initials">{project.image}</span>
          </div>

          <div className="project-detail-content">
            <div className="project-detail-header">
              <h1>{project.name}</h1>
              <button 
                className="favorite-btn-large"
                onClick={() => toggleFavorite(project.id)}
              >
                {isFavorite(project.id) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
              </button>
            </div>

            <div className={`status-badge ${project.status.toLowerCase()}`}>
              {project.status === 'Featured' ? '🌟 Featured Project' : '✅ ' + project.status}
            </div>

            <div className="tech-badges-detail">
              {project.techStack.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>

            <div className="progress-container-detail">
              <div className="progress-label">
                <span>Project Completion</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                  role="progressbar"
                  aria-valuenow={project.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>

            <h3>About this project</h3>
            <p className="full-description">{project.fullDescription}</p>

            <div className="action-buttons-detail">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-demo-large"
                >
                  🔗 Live Demo
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-code-large"
                >
                  💻 GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
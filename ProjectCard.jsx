import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import TechBadge from './TechBadge';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="project-card">
      {/* Project Image / Placeholder */}
      <div 
        className="project-image"
        style={{ background: project.bgGradient }}
      >
        <span className="project-initials">{project.image}</span>
      </div>

      {/* Status Badge */}
      <div className={`status-badge ${project.status.toLowerCase()}`}>
        {project.status === 'Featured' ? '🌟 Featured' : '✅ ' + project.status}
      </div>

      {/* Favorite Button */}
      <button 
        className="favorite-btn"
        onClick={() => toggleFavorite(project.id)}
        aria-label={isFavorite(project.id) ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite(project.id) ? '❤️' : '🤍'}
      </button>

      <h3>{project.name}</h3>
      
      {/* Tech Badges */}
      <div className="tech-badges">
        {project.techStack.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

      <p className="project-description">{project.description}</p>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-label">
          <span>Completion</span>
          <span>{project.progress}%</span>
        </div>
        <div 
          className="progress-bar"
          role="progressbar"
          aria-valuenow={project.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div 
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        {project.liveDemo && (
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-demo"
          >
            🔗 Live Demo
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-code"
          >
            💻 View Code
          </a>
        )}
      </div>

      {/* More Info Toggle */}
      <button 
        className="more-info-btn"
        onClick={() => setShowDetails(!showDetails)}
        aria-expanded={showDetails}
      >
        {showDetails ? 'Show Less ↑' : 'More Info ↓'}
      </button>

      {showDetails && (
        <div className="more-info">
          <p>{project.fullDescription}</p>
          <button 
            className="view-details-btn"
            onClick={handleViewDetails}
          >
            View Full Details →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
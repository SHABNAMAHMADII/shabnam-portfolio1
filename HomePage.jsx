import { useUser } from '../contexts/UserContext';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';
import { useState } from 'react';

const HomePage = () => {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTech, setFilterTech] = useState('All');

  // Get unique tech options
  const techOptions = ['All', ...new Set(projects.map(p => p.tech))];

  // Filter projects based on search and tech
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = filterTech === 'All' || project.tech === filterTech;
    return matchesSearch && matchesTech;
  });

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="avatar-large">🚀💫</div>
          <h1>Hi, I'm <span className="highlight">{user.name}</span></h1>
          <p className="title">{user.role}</p>
          <p className="tagline">Building beautiful web experiences with code and creativity ✨</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="projects-section">
        <h2>🚀 My Projects</h2>
        
        <div className="search-filter">
          <input
            type="text"
            placeholder="🔍 Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <div className="filter-buttons">
            {techOptions.map(tech => (
              <button
                key={tech}
                className={`filter-btn ${filterTech === tech ? 'active' : ''}`}
                onClick={() => setFilterTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="empty-state">No projects found. Try a different search!</p>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
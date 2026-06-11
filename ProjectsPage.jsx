import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const ProjectsPage = () => {
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
      <section className="projects-page-section">
        <h2>🚀 All Projects</h2>
        <p className="section-subtitle">Explore my work and creative journey</p>

        <div className="search-filter">
          <input
            type="text"
            placeholder="🔍 Search by project name..."
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
          <p className="empty-state">💭 No projects found. Try a different search or filter!</p>
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

export default ProjectsPage;
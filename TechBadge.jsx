const TechBadge = ({ tech }) => {
  const getTechColor = (technology) => {
    switch (technology) {
      case 'JavaScript':
        return '#f7df1e';
      case 'HTML/CSS':
        return '#e44d26';
      case 'Node.js':
        return '#68a063';
      case 'React':
        return '#61dafb';
      default:
        return '#6c63ff';
    }
  };

  return (
    <span 
      className="tech-badge"
      style={{ backgroundColor: getTechColor(tech) }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
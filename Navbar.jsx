import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/')}>
        <span className="brand-emoji">🌸</span>
        <h1>{user.name}</h1>
      </div>

      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          🏠 Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          👤 About
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          🚀 Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          📬 Contact
        </NavLink>
        
        <button onClick={toggleTheme} className="theme-btn">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
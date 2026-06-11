import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>💖 Built with React by Shabnam Ahmadi | CS Student</p>
        <p>📧 shabnam.ahmadi0018@gmail.com</p>
        <div className="footer-links">
          <a href="https://github.com/SHABNAMAHMADII" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="copyright">© 2024 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
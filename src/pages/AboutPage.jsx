import { useUser } from '../contexts/UserContext';
import { useState } from 'react';

const AboutPage = () => {
  const { user } = useUser();
  const [avatarReaction, setAvatarReaction] = useState('🚀💫');
  const reactions = ['🚀💫', '😊', '💻', '🎉', '🔥', '⭐', '🌸', '💕'];

  return (
    <div className="page-container">
      <section className="about-section">
        <h2>🌸 About Me</h2>
        
        <div className="about-content">
          <div 
            className="avatar-clickable"
            onClick={() => {
              const nextIndex = (reactions.indexOf(avatarReaction) + 1) % reactions.length;
              setAvatarReaction(reactions[nextIndex]);
            }}
          >
            <div className="avatar-circle">{avatarReaction}</div>
            <p className="click-hint">✨ Click me for surprise reactions! ✨</p>
          </div>
          
          <div className="about-text">
            <p>Hello! I'm <strong>{user.name}</strong>, a passionate <strong>{user.role}</strong> from Afghanistan with a love for creating beautiful and functional web experiences.</p>
            
            <p>I believe that code is not just about functionality - it's about creating something that brings joy to users. My journey in web development started with curiosity and has grown into a full-blown passion.</p>
            
            <p>When I'm not coding, you'll find me reading, exploring new technologies, or working on my next creative project. I'm always excited to learn new things and take on challenges that help me grow as a developer.</p>
            
            <p>🎯 <strong>My goal:</strong> To build innovative web applications that make a positive impact on people's lives.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3>💪 My Skills</h3>
          <div className="skills-container">
            <div className="skill-item">
              <div className="skill-header">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '85%' }} />
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-header">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '90%' }} />
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-header">
                <span>Node.js</span>
                <span>70%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '70%' }} />
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-header">
                <span>React</span>
                <span>75%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
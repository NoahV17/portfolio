import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ 
  title,
  description,
  imageUrl,
  repoUrl,
  demoUrl,
  technologies,
  githubData,
  onClose 
}) => {
  // Prevent clicks inside modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Helper function to get class for technology tags
  const getSkillClass = (skill) => {
    const skillCategories = {
      // Frontend
      'React': 'frontend',
      'Vue': 'frontend',
      'Angular': 'frontend',
      'JavaScript': 'frontend',
      'TypeScript': 'frontend',
      'HTML': 'frontend',
      'CSS': 'frontend',
      'SASS': 'frontend',
      'Redux': 'frontend',
    
      // Backend
      'Node.js': 'backend',
      'Express': 'backend',
      'Django': 'backend',
      'Flask': 'backend',
      'Ruby on Rails': 'backend',
      'MongoDB': 'backend',
      'MySQL': 'backend',
      'PostgreSQL': 'backend',
      'GraphQL': 'backend',
      'RESTful API': 'backend',
    
      // Languages (not JS/TS)
      'Python': 'language',
      'Java': 'language',
      'C++': 'language',
      'C#': 'language',
      'Go': 'language',
      'Rust': 'language',
      'Swift': 'language',
      'Kotlin': 'language',
      'Ruby': 'language',
      'PHP': 'language',
    
      // Tools & Other
      'Git': 'tool',
      'Docker': 'tool',
      'Kubernetes': 'tool',
      'AWS': 'tool',
      'Firebase': 'tool',
      'CI/CD': 'tool',
      'TensorFlow': 'tool',
      'PyTorch': 'tool'
    };
    
    return skillCategories[skill] || 'tool'; // Default to tool
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>
        
        <div className="modal-banner" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="modal-banner-content">
            <h2>{title}</h2>
            
            <div className="modal-banner-links">
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                  <i className="fab fa-github"></i>
                </a>
              )}
              <a href="https://www.linkedin.com/in/noahvario" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                <i className="fab fa-linkedin-in"></i>
              </a>
              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <p>{description}</p>
            
            <div className="modal-technologies">
              {Array.isArray(technologies) && technologies.map((tech, index) => (
                <span key={index} className={`tech-tag ${getSkillClass(tech)}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {githubData && (
            <div className="modal-github-stats">
              <div className="stat-item">
                <i className="fas fa-star"></i>
                <span>{githubData.stars} stars</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-code-branch"></i>
                <span>{githubData.forks} forks</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Last updated: {githubData.lastUpdated}</span>
              </div>
              {githubData.recentCommits && githubData.recentCommits.length > 0 && (
                <div className="recent-commits">
                  <h4>Recent Commits</h4>
                  <ul>
                    {githubData.recentCommits.map((commit, index) => (
                      <li key={index}>
                        <div className="commit-message">{commit.message}</div>
                        <div className="commit-date">{commit.date}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="modal-links">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> View Code 
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
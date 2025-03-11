import React from 'react';
import './ProjectModal.css';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar, FaCodeBranch } from 'react-icons/fa';

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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="modal-close" onClick={onClose}>
          {/* <FaTimes /> */}
        </button>
        
        <div className="modal-banner" style={{ backgroundImage: `url(${imageUrl})` }}>
          <h2>{title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <p>{description}</p>
            
            <div className="modal-technologies">
              {Array.isArray(technologies) && technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {githubData && (
            <div className="modal-github-stats">
              <div className="stat-item">
                {/* <FaStar /> */}
                <span>{githubData.stars} stars</span>
              </div>
              <div className="stat-item">
                {/* <FaCodeBranch /> */}
                <span>{githubData.forks} forks</span>
              </div>
              <div className="stat-item">
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
                {/* <FaGithub /> */}View Code 
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                {/* <FaExternalLinkAlt />*/}Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
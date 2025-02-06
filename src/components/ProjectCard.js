import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  repoUrl, 
  demoUrl, 
  technologies, 
  onClick 
}) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="project-info">
        <div className="technologies">
          {Array.isArray(technologies) ? (
            technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))
          ) : (
            <span className="tech-tag">{typeof technologies === 'object' ? JSON.stringify(technologies) : technologies}</span>
          )}
        </div>
        <div className="project-links" onClick={e => e.stopPropagation()}>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="github-link">
              {/* <FaGithub />*/} Code
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
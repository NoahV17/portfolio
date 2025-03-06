import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
        <img src={imageUrl || '/img/placeholder-project.jpg'} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {Array.isArray(technologies) ? 
            technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))
            : 
            <span className="tech-tag">{technologies}</span>
          }
          {Array.isArray(technologies) && technologies.length > 3 && 
            <span className="tech-tag">+{technologies.length - 3}</span>
          }
        </div>
        
        <div className="project-links" onClick={e => e.stopPropagation()}>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="github-link" title="View Code">
              <FaGithub />
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link" title="Live Demo">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
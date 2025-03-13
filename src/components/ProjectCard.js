import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  demoUrl, 
  technologies, 
  onClick 
}) => {
  // Helper function to get icons for skills - moved inside component
  const getSkillIcon = (skill) => {
    const iconMap = {
      'React': <i className="fab fa-react"></i>,
      'JavaScript': <i className="fab fa-js"></i>,
      'TypeScript': <i className="fab fa-js"></i>,
      'HTML': <i className="fab fa-html5"></i>,
      'CSS': <i className="fab fa-css3-alt"></i>,
      'SASS': <i className="fab fa-sass"></i>,
      'Node.js': <i className="fab fa-node-js"></i>,
      'Python': <i className="fab fa-python"></i>,
      'Java': <i className="fab fa-java"></i>,
      'PHP': <i className="fab fa-php"></i>,
      'Docker': <i className="fab fa-docker"></i>,
      'AWS': <i className="fab fa-aws"></i>,
      'Git': <i className="fab fa-git-alt"></i>,
      'Unity': <i className="fab fa-unity"></i>,
      'C#': <i className="fas fa-code"></i>,
      'C++': <i className="fas fa-code"></i>,
      'Vue': <i className="fab fa-vuejs"></i>,
      'Angular': <i className="fab fa-angular"></i>,
      'Ruby': <i className="fab fa-gem"></i>,
      'WordPress': <i className="fab fa-wordpress"></i>,
    };
    
    return iconMap[skill] || <i className="fas fa-code"></i>;
  };

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img src={imageUrl || '/react-portfolio/img/placeholder-project.jpg'} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {Array.isArray(technologies) ? 
            technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">
                {/* Render text only, not the icon object */}
                {tech}
              </span>
            ))
            : 
            <span className="tech-tag">{technologies}</span>
          }
          {Array.isArray(technologies) && technologies.length > 3 && 
            <span className="tech-tag">+{technologies.length - 3}</span>
          }
        </div>
        
        <div className="project-links" onClick={e => e.stopPropagation()}>
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
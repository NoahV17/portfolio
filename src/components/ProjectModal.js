import React from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ 
  title,
  description,
  imageUrl,
  repoUrl,
  demoUrl,
  technologies,
  additionalImages,
  onClose 
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          {/* <FaTimes /> */}✕
        </button>
        
        <div className="modal-banner" style={{ backgroundImage: `url(${imageUrl})` }}>
          <h2>{title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <p>{description}</p>
            <div className="modal-technologies">
              {
                Array.isArray(technologies) ? (
                  technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))
                ) : (
                  <span className="tech-tag">{typeof technologies === 'object' ? JSON.stringify(technologies) : technologies}</span>
                )
              }
            </div>
          </div>

          <div className="modal-links">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="github-link">
              {/* <FaGithub /> */}View Code
            </a>
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                Live Demo
              </a>
            )}
          </div>

          {additionalImages && Array.isArray(additionalImages) && (
            <div className="modal-gallery">
              {additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`${title} screenshot ${index + 1}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
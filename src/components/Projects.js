import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Travel Assistant",
      description: "A comprehensive travel planning application",
      imageUrl: process.env.PUBLIC_URL + "/img/jetset-landing.png",
      repoUrl: "https://github.com/NoahV17/JetSet",
      demoUrl: "https://jet-dlldc4378-noahv17s-projects.vercel.app",
      technologies: ["React", "Node.js", "MongoDB"],
      
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "https://via.placeholder.com/300x200",
      repoUrl: "https://github.com/yourusername/project2",
      technologies: ["React", "Express", "PostgreSQL"]
    }
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
            technologies={project.technologies}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal 
          title={selectedProject.title}
          description={selectedProject.description}
          imageUrl={selectedProject.imageUrl}
          repoUrl={selectedProject.repoUrl}
          demoUrl={selectedProject.demoUrl}
          technologies={selectedProject.technologies}
          additionalImages={selectedProject.additionalImages}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
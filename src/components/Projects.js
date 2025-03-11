import React, { useState, useEffect } from 'react';
import { getRepositoryInfo, getRecentCommits } from '../services/githubService';
import ProjectModal from './ProjectModal';
import './Projects.css';

// Skill category mapping
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

// Get the CSS class for a skill
const getSkillClass = (skill) => {
  return skillCategories[skill] || 'tool'; // Default to tool
};

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React.',
      repoName: 'react_portfolio',
      skills: ['React', 'JavaScript', 'CSS'],
      image: '../public/img/pocket-pomo.jpg',
      liveLink: 'https://noahvario.com',
      githubData: null,
      loading: true
    },
    {
      id: 2,
      title: 'Data Visualization Tool',
      description: 'A tool for visualizing complex datasets with interactive charts.',
      repoName: 'data_viz_tool',
      skills: ['Python', 'React', 'D3.js', 'Flask'],
      image: '/images/data-viz.jpg',
      githubData: null,
      loading: true
    },
    {
      id: 3,
      title: 'Machine Learning API',
      description: 'REST API for machine learning model predictions.',
      repoName: 'ml_api',
      skills: ['Python', 'TensorFlow', 'Flask', 'Docker'],
      image: '/images/ml-api.jpg',
      githubData: null,
      loading: true
    },
    {
      id: 4,
      title: 'Mobile Game',
      description: 'A casual mobile game built with Unity.',
      repoName: 'mobile_game',
      skills: ['C#', 'Unity', 'Game Design'],
      image: '/images/game.jpg',
      githubData: null,
      loading: true
    },
    // Add more projects to fill the 4x3 grid
  ]);
  
  // Add state for selected project
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          if (project.repoName) {
            try {
              const repoData = await getRepositoryInfo(project.repoName);
              const commitsData = await getRecentCommits(project.repoName, 3);
              
              return {
                ...project,
                githubData: {
                  stars: repoData?.stargazers_count || 0,
                  forks: repoData?.forks_count || 0,
                  lastUpdated: repoData?.updated_at ? new Date(repoData.updated_at).toLocaleDateString() : 'Unknown',
                  description: repoData?.description || project.description,
                  language: repoData?.language || '',
                  recentCommits: commitsData?.map(commit => ({
                    message: commit.commit.message,
                    date: new Date(commit.commit.author.date).toLocaleDateString()
                  })) || []
                },
                loading: false
              };
            } catch (error) {
              console.error(`Error fetching data for ${project.repoName}:`, error);
              return { ...project, loading: false };
            }
          }
          return { ...project, loading: false };
        })
      );
      
      setProjects(updatedProjects);
    };
    
    fetchGitHubData();
  }, []);

  // Function to handle project card clicks
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section">
      <h3>My Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="card project-card"
            onClick={() => handleProjectClick(project)}
          >
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            )}
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="project-description">{project.githubData?.description || project.description}</p>
              
              <div className="skills-container">
                {project.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className={`skill-tag ${getSkillClass(skill)}`}>
                    {getSkillIcon(skill)} {skill}
                  </span>
                ))}
                {project.skills.length > 3 && (
                  <span className="skill-tag">+{project.skills.length - 3}</span>
                )}
              </div>
              
              {project.loading ? (
                <div className="loading-indicator">
                  <i className="fas fa-spinner fa-spin"></i>
                </div>
              ) : project.githubData ? (
                <div className="github-stats">
                  <div>
                    <i className="fas fa-star"></i> {project.githubData.stars}
                  </div>
                  <div>
                    <i className="fas fa-code-branch"></i> {project.githubData.forks}
                  </div>
                </div>
              ) : null}
              
              <div className="project-links" onClick={e => e.stopPropagation()}>
                {project.repoName && (
                  <a 
                    href={`https://github.com/NoahV17/${project.repoName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    title="View Code"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                    title="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.githubData?.description || selectedProject.description}
          imageUrl={selectedProject.image}
          repoUrl={selectedProject.repoName ? `https://github.com/NoahV17/${selectedProject.repoName}` : null}
          demoUrl={selectedProject.liveLink}
          technologies={selectedProject.skills}
          githubData={selectedProject.githubData}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

// Helper function to get icons for skills
function getSkillIcon(skill) {
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
}

export default Projects;
import React, { useState, useEffect } from 'react';
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
  const [projects] = useState([
    {
      id: 1,
      title: 'AI Travel Planner',
      description: 'Engineered seamless cross-device functionality through real-time data syncing through Firebase Firestore, allowing automatic data fetching and eliminating the need for page refreshing.',
      repoName: 'jetset',
      skills: ['Node', 'React', 'Firestore', 'Gemini Turbo API', 'Agile'],
      image: process.env.PUBLIC_URL + '/img/travel.png',
      liveLink: 'https://jet-set-git-main-noahv17s-projects.vercel.app',
    },
    {
      id: 2,
      title: 'Website Builder',
      description: 'Reduced site creation time by 90% through an automated GitHub Actions workflow that dynamically generated web pages by parsing repository file directories.',
      repoName: 'portfolio_website',
      skills: ['GitHub Actions', 'Yaml', 'Git Automation', 'Modular Components'],
      image: process.env.PUBLIC_URL + '/img/web-build.png',
      liveLink: 'https://noahv17.github.io/portfolio_website/portfolio.html',
    },
    {
      id: 3,
      title: 'Arcade Game',
      description: 'Reduced frame skipping and slowdowns by 95% after introducing entity memory optimization and more efficient runtime code, boosting overall efficiency and improving responsiveness.',
      repoName: 'Galactic-Defender',
      skills: ['Python', 'Object Orientation', 'Pygame', 'Encapsulation'],
      image: process.env.PUBLIC_URL + '/img/galactic-defender-intro.png',
      liveLink: null,
    },
    {
      id: 4,
      title: 'Language Learning Service (WIP)',
      description: 'Integrated optimized algorithms such as ternary search and comb sort with a self-sorting array, ensuring fast data storage and retrieval for efficient application performance.',
      repoName: 'phrase',
      skills: ['MongoDB', 'Django'],
      image: process.env.PUBLIC_URL + '/img/phrase.png',
      liveLink: null,
    },
    {
      id: 5,
      title: 'Productivity Application',
      description: 'Increased user retention by 150% by building a more intuitive front end with seamless features that allow users to better make use of our services.',
      repoName: 'StudyBuddy-TaskTrack',
      skills: ['C++', 'C#', 'Javascript', 'DLLs', 'Bash'],
      image: process.env.PUBLIC_URL + '/img/task-track.png',
      liveLink: null,
    },
    {
      id: 6,
      title: 'Pomodoro Study Timer',
      description: 'Increased user retention by 150% by building a more intuitive front end with seamless features that allow users to better make use of our services.',
      repoName: 'study-buddy',
      skills: ['Swift', 'Xcode', 'Mobile', 'iOS', 'Bash'],
      image: process.env.PUBLIC_URL + '/img/pocket-pomo.jpg',
      liveLink: null,
    },
    {
      id: 7,
      title: 'ML and Data Science w/ Python',
      description: 'Increased user retention by 150% by building a more intuitive front end with seamless features that allow users to better make use of our services.',
      repoName: null,
      skills: ['Python', 'Machine Learning', 'AI'],
      image: process.env.PUBLIC_URL + '/img/ml.png',
      liveLink: 'https://noahv17.github.io/ml-data-visualization/',
    },
    // {
    //   id: 8,
    //   title: 'Computer Vision Sign Language Translation',
    //   description: 'Analyzed confusion matrices with findings leading to a 20% increase in model precision.',
    //   repoName: null,
    //   skills: ['Python', 'ML'],
    //   image: '/portfolio/img/sign-language.png',
    //   liveLink: null,
    // },
    {
      id: 9,
      title: 'Connect 4 Online',
      description: 'Analyzed confusion matrices with findings leading to a 20% increase in model precision.',
      repoName: 'conn4',
      skills: ['JavaScript', 'React', 'Node.js'],
      image: process.env.PUBLIC_URL + '/img/conn4.png',
      liveLink: 'https://noahv17.github.io/conn4/',
    }
  ]);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [animated, setAnimated] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 100);
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
      <div className={`projects-grid ${animated ? 'animated' : ''}`}>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="card project-card"
            onClick={() => handleProjectClick(project)}
            style={{"--i": index}} // Animation delay variable
          >
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            )}
            <div className="card-content">
              <div className="content-wrapper">
                <h3 className="card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className={`tech-tag ${getSkillClass(skill)}`}>
                      {getSkillIcon(skill)} {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="tech-tag">+{project.skills.length - 3}</span>
                  )}
                </div>
              </div>
              
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
          description={selectedProject.description}
          imageUrl={selectedProject.image}
          repoUrl={selectedProject.repoName ? `https://github.com/NoahV17/${selectedProject.repoName}` : null}
          demoUrl={selectedProject.liveLink}
          technologies={selectedProject.skills}
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
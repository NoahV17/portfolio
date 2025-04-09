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
      description: 'An all in one travel planning app that utilizes Google\'s Gen AI to give you a custom trip plan based on your destination and preferences in under a minute. With cross-device data syncing through Firebase Firestore, users can seamlessly swap between the desktop and mobile sites when logged in.',
      repoName: null,
      skills: ['React', 'Firestore', 'Gemini Turbo API', 'Agile', 'Node'],
      image: process.env.PUBLIC_URL + '/img/travel.png',
      liveLink: 'https://jet-set-git-main-noahv17s-projects.vercel.app',
      // Enhanced content
      storyContent: "This project started as a solution to my own travel planning frustrations. I wanted a tool that could leverage AI to create personalized travel itineraries while maintaining a clean, user-friendly interface. The application uses Google's Gemini Turbo API to generate custom travel plans based on user preferences, location, and trip duration.",
      challenges: [
        "Implementing a responsive UI that works seamlessly across mobile and desktop",
        "Optimizing API calls to the Gemini Turbo model to reduce costs and latency",
        "Creating a flexible data structure in Firestore that could accommodate varying travel plans"
      ],
      processSteps: [
        { 
          title: "Research & Planning", 
          description: "Conducted user surveys to identify key pain points in travel planning and defined core features." 
        },
        { 
          title: "Prototyping", 
          description: "Created wireframes and interactive prototypes to validate the user experience." 
        },
        { 
          title: "Development", 
          description: "Built the application using React, Firebase, and integrated with Google's Gemini AI." 
        },
        { 
          title: "Testing & Refinement", 
          description: "Conducted user testing, gathered feedback, and iteratively improved the application." 
        }
      ],
      outcomes: [
        "Successfully integrated Firebase Firestore with real-time synchronization",
        "Created an intuitive UI that received positive user feedback",
        "Developed API wrapper to efficiently interact with Gemini Turbo model",
        "Implemented user authentication and profile management"
      ],
      // galleryImages: [
      //   { 
      //     src: process.env.PUBLIC_URL + '/img/travel-detail1.png', 
      //     caption: "Landing page with AI-powered trip suggestion" 
      //   },
      //   { 
      //     src: process.env.PUBLIC_URL + '/img/travel-detail2.png', 
      //     caption: "Interactive itinerary builder" 
      //   },
      //   { 
      //     src: process.env.PUBLIC_URL + '/img/travel-detail3.png', 
      //     caption: "Mobile responsive design" 
      //   }
      // ]
    },
    {
      id: 2,
      title: 'Arcade Game',
      description: 'Reduced frame skipping and slowdowns by 95% after introducing entity memory optimization and more efficient runtime code, boosting overall efficiency and improving responsiveness.',
      repoName: 'Galactic-Defender',
      skills: ['Python', 'Object Orientation', 'Pygame', 'Encapsulation'],
      image: process.env.PUBLIC_URL + '/img/galactic-defender-intro.png',
      liveLink: null,
    },
    {
      id: 3,
      title: 'AI Lang. Teacher (wip)',
      description: 'Web app built to learn new languages the fastest and most useful way.',
      repoName: 'phrase',
      skills: ['MongoDB', 'Django'],
      image: process.env.PUBLIC_URL + '/img/phrase.png',
      liveLink: null,
    },
    {
      id: 4,
      title: 'Productivity Calendar',
      description: 'Increased user retention by 150% by building a more intuitive front end with seamless features that allow users to better make use of our services.',
      repoName: 'StudyBuddy-TaskTrack',
      skills: ['C++', 'C#', 'Javascript', 'DLLs', 'Bash'],
      image: process.env.PUBLIC_URL + '/img/task-track.png',
      liveLink: null,
    },
    {
      id: 5,
      title: 'Pomodoro Study Timer',
      description: 'A purpose built application, built from the ground up for eliminating distractions during study sessions.',
      repoName: 'study-buddy',
      skills: ['Swift', 'Xcode', 'Mobile', 'iOS', 'Bash'],
      image: process.env.PUBLIC_URL + '/img/pocket-pomo.jpg',
      liveLink: null,
    },
    {
      id: 6,
      title: 'ML & Data Science w/ JS',
      description: 'Website for the introduction of ML and DS techniques on a simple dataset.',
      repoName: null,
      skills: ['PapaParse', 'ML.js', 'Plotly.js', 'Javascript', 'Machine Learning', 'AI'],
      image: process.env.PUBLIC_URL + '/img/ml.png',
      liveLink: 'https://noahv17.github.io/ml-data-visualization/',
    },
    {
      id: 7,
      title: 'Website Builder',
      description: 'Reduced site creation time by 90% through an automated GitHub Actions workflow that dynamically generated web pages by parsing repository file directories.',
      repoName: 'portfolio_website',
      skills: ['GitHub Actions', 'Yaml', 'Git Automation', 'Modular Components'],
      image: process.env.PUBLIC_URL + '/img/web-build.png',
      liveLink: 'https://noahv17.github.io/portfolio_website/portfolio.html',
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
      title: 'Connect 4 Web',
      description: 'A simple way to play Connect 4 on the web.',
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
                
                {/* New card footer to contain both technologies and links */}
                <div className="card-footer" onClick={e => e.stopPropagation()}>
                  <div className="project-technologies">
                    {project.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className={`tech-tag ${getSkillClass(skill)}`}>
                        {getSkillIcon(skill)} {skill}
                      </span>
                    ))}
                    {project.skills.length > 2 && (
                      <span className="tech-tag">+{project.skills.length - 2}</span>
                    )}
                  </div>
                  
                  <div className="project-links">
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
                        className="demo-link live-link" /* Make sure we use demo-link */
                        title="Live Demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal with enhanced props */}
      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.description}
          imageUrl={selectedProject.image}
          repoUrl={selectedProject.repoName ? `https://github.com/NoahV17/${selectedProject.repoName}` : null}
          demoUrl={selectedProject.liveLink}
          technologies={selectedProject.skills}
          onClose={closeModal}
          // Pass the enhanced content props
          storyContent={selectedProject.storyContent}
          processSteps={selectedProject.processSteps}
          galleryImages={selectedProject.galleryImages}
          challenges={selectedProject.challenges}
          outcomes={selectedProject.outcomes}
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
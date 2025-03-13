import React, { useEffect, useRef, useState } from 'react';
import './ProfessionalExperience.css';

const ProfessionalExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const entriesRef = useRef([]);
  
  // Sample work experience data - replace with your actual experience
  const experiences = [
    {
      id: 1,
      company: "Tech Company A",
      position: "Senior Developer",
      duration: "2021 - Present",
      location: "San Francisco, CA",
      description: "Led development of key features for flagship product. Collaborated with cross-functional teams to define, design, and ship new features. Mentored junior developers.",
      skills: ["React", "Node.js", "AWS", "CI/CD"],
      highlights: [
        "Increased application performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built microservice architecture serving 1M+ daily users"
      ]
    },
    {
      id: 2,
      company: "Tech Startup B",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      location: "Boston, MA",
      description: "Developed and maintained code for client-facing web applications. Collaborated with designers to implement visually appealing and responsive interfaces.",
      skills: ["JavaScript", "React", "Python", "Django"],
      highlights: [
        "Developed RESTful APIs consumed by mobile and web applications",
        "Implemented user authentication system with OAuth 2.0",
        "Optimized database queries reducing load times by 30%"
      ]
    },
    {
      id: 3,
      company: "Digital Agency C",
      position: "Web Developer",
      duration: "2017 - 2019",
      location: "Chicago, IL",
      description: "Worked with a team to develop websites and applications for various clients. Converted design mockups into responsive layouts.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
      highlights: [
        "Built 15+ client websites from concept to deployment",
        "Created custom WordPress themes and plugins",
        "Implemented responsive designs for optimal viewing across devices"
      ]
    },
    {
      id: 4,
      company: "Company D",
      position: "Junior Developer",
      duration: "2015 - 2017",
      location: "Remote",
      description: "Started career as a junior developer working on frontend applications. Learned industry best practices and collaborative development.",
      skills: ["JavaScript", "CSS", "Git"],
      highlights: [
        "Developed and maintained frontend components",
        "Collaborated with designers to implement UI/UX improvements",
        "Participated in code reviews and pair programming sessions"
      ]
    },
    {
      id: 5,
      company: "University Projects",
      position: "Student Developer",
      duration: "2013 - 2015",
      location: "University",
      description: "Completed various academic projects while pursuing degree in Computer Science.",
      skills: ["Java", "Python", "Algorithms", "Data Structures"],
      highlights: [
        "Developed a path-finding algorithm visualization tool",
        "Created a simple compiler for a custom programming language",
        "Built a web-based student management system"
      ]
    }
  ];

  // Update entries ref array when experiences change
  useEffect(() => {
    entriesRef.current = entriesRef.current.slice(0, experiences.length);
  }, [experiences]);

  // Handle scroll and update active timeline entry
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const indicatorPosition = window.innerHeight / 2; // Middle of the screen
      
      // Find which timeline entry is closest to the indicator
      let closestEntryIndex = 0;
      let minDistance = Infinity;
      
      entriesRef.current.forEach((entry, index) => {
        if (!entry) return;
        
        const entryRect = entry.getBoundingClientRect();
        const entryMiddle = entryRect.top + entryRect.height / 2;
        const distance = Math.abs(entryMiddle - indicatorPosition);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestEntryIndex = index;
        }
      });
      
      setActiveIndex(closestEntryIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="professional-experience">
      <h3>Professional Journey</h3>
      
      <div className="timeline-container">
        {/* Timeline bar with fixed indicator */}
        <div className="timeline-track" ref={timelineRef}>
          <div className="timeline-line"></div>
          <div className="timeline-indicator"></div>
          
          {/* Timeline entries */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              ref={el => entriesRef.current[index] = el}
              className={`timeline-entry ${index === activeIndex ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.duration}</div>
                <h3 className="timeline-title">
                  {exp.position} <span className="timeline-company">@ {exp.company}</span>
                </h3>
                <div className="timeline-location">
                  <i className="fas fa-map-marker-alt"></i> {exp.location}
                </div>
                <p>{exp.description}</p>
                
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
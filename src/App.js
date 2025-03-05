import React, { useState, useEffect, useRef } from 'react';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Projects');
  const [scrollY, setScrollY] = useState(0);
  const nameRef = useRef(null);
  const scrollTimeout = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Calculate name position based on scroll
  useEffect(() => {
    if (nameRef.current) {
      const baseOffset = scrollY * 0.2;
      const targetPosition = isScrolling ? baseOffset : 0;
      
      nameRef.current.style.transform = `translateY(${targetPosition}px)`;
      nameRef.current.style.transition = isScrolling ? 'none' : 'transform 0.8s ease-out';
    }
  }, [scrollY, isScrolling]);

  return (
    <div className="App">
      <header className="App-header">
        <h2 ref={nameRef} className="floating-name">Noah Vario</h2>
        <div className="social-links">
          <a href="https://github.com/NoahV17" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/noahvario" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </header>
      <main>
        <div className="tabber">
          <button
            className={activeSection === 'Projects' ? 'active' : ''}
            onClick={() => setActiveSection('Projects')}
          >
            Projects
          </button>
          <button
            className={activeSection === 'ProfessionalExperience' ? 'active' : ''}
            onClick={() => setActiveSection('ProfessionalExperience')}
          >
            Professional Experience
          </button>
        </div>
        {activeSection === 'Projects' && <Projects />}
        {activeSection === 'ProfessionalExperience' && <ProfessionalExperience />}
      </main>
    </div>
  );
}

export default App;
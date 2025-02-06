import React, { useState } from 'react';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Projects');

  return (
    <div className="App">
      <header className="App-header">
        <h2>Noah Vario</h2>
        <div className="social-links">
          <a href="https://github.com/NoahV17" target="_blank" rel="noopener noreferrer">
          Github</a>
          <a href="https://www.linkedin.com/in/noahvario" target="_blank" rel="noopener noreferrer">
          Linkedin</a>
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
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-links-intro">
        <div className="header-intro">
          <h1>Noah Vario</h1>
          <p>Developer Portfolio</p>
        </div>
        <div className="header-links">
          <a href="https://github.com/NoahV17" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/noahvario" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="header-profile-pic">
        
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        ☰
      </button>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
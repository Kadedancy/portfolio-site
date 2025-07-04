import React, { useState } from 'react';
import './sidebar.css';

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        ☰
      </button>
      <nav>
        <ul>
          <li>
            <a href="#about">
                <span className="label">About</span>
            </a>
          </li>
          <li>
            <a href="#projects">
            <span className="label">Projects</span>
            </a>
          </li>
          <li>
            <a href="#Resume">
            <span className="label">Resume</span>
            </a>
          </li>
          <li>
            <a href="#contact">
            <span className="label">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
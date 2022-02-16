import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li
          className={props.activeMainComponent === 'aboutMe' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('aboutMe')}
        >
          <a>About Me</a>
        </li>
        <li
          className={props.activeMainComponent === 'projects' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('projects')}
        >
          <a>Projects</a>
        </li>
        <li
          className={props.activeMainComponent === 'contactMe' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('contactMe')}
        >
          <a>Contact Me</a>
        </li>
        <li
          className={props.activeMainComponent === 'resume' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('resume')}
        >
          <a>Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

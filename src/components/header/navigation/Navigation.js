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
          About Me
        </li>
        <li
          className={props.activeMainComponent === 'projects' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('projects')}
        >
          Projects
        </li>
        <li
          className={props.activeMainComponent === 'contactMe' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('contactMe')}
        >
          Contact Me
        </li>
        <li
          className={props.activeMainComponent === 'resume' ? 'active' : ''}
          onClick={() => props.setActiveMainComponent('resume')}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

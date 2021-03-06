import React from 'react';
import AboutMe from './aboutMe/AboutMe';
import ContactMe from './contactMe/ContactMe';
import Projects from './projects/Projects';
import Resume from './resume/Resume';

function Main(props) {
  switch (props.activeMainComponent) {
    case 'aboutMe': {
      return <AboutMe />;
    }
    case 'projects': {
      return <Projects />;
    }
    case 'contactMe': {
      return <ContactMe />;
    }
    case 'resume': {
      return <Resume />;
    }
    default: {
      return <AboutMe />;
    }
  }
}

export default Main;

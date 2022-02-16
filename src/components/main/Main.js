import React from 'react';
import AboutMe from './aboutMe/AboutMe';
import ContactMe from './contactMe/ContactMe';
import Projects from './projects/Project';
import Resume from './resume/Resume';

function Main(props) {
  console.log('activeMainComponent', props.activeMainComponent);
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
  }
  return 'In development';
}

export default Main;

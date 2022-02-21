import React from 'react';
import Project from './project/Project';

const Projects = () => {
  return (
    <section id='projects'>
      <div>
        <h2>Projects</h2>
      </div>
      <div className='articles'>
        <Project
          id='tech-blog'
          title='Tech Blog'
          primary='1'
          repo='https://github.com/bravotango/Tech-Blog'
          deployedLocation='https://bt-tech-blog.herokuapp.com/'
          description='This application is a CMS-style blog site similar to a Wordpress site. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.'
        />
        <Project
          id='project-1'
          title='Movie & Cocktail'
          repo='https://github.com/bravotango/Movie-and-Cocktail'
          deployedLocation='https://bravotango.github.io/Movie-and-Cocktail/'
          description='Search movies for synopsis & receive drink suggestions'
        />

        <Project
          id='employee-tracker'
          title='Employee Tracker'
          repo='https://github.com/bravotango/Employee-Tracker/'
          description='This is a command-line application to manage a company&#39;s employee database, using Node.js, Inquirer, and MySQL.'
        />

        <Project
          id='weather'
          title='Weather Dashboard'
          repo='https://github.com/bravotango/Weather-Dashboard'
          deployedLocation='https://bravotango.github.io/Weather-Dashboard/'
          description='As a traveler, search the weather outlook for multiple destinations to plan a trip accordingly.'
        />

        <Project
          id='workday'
          title='Work Day Scheduler'
          repo='https://github.com/bravotango/Work-Day-Scheduler'
          deployedLocation='https://bravotango.github.io/Work-Day-Scheduler/'
          description='A simple calendar app for scheduling your work day'
        />

        <Project
          id='react'
          title='React'
          repo='https://github.com/bravotango/React-Redux-Walk-Sequence'
          deployedLocation='https://www.btgraphix.com/walk'
          description='8 slides used in conjunction with React and Redux to simulate a walk sequence'
        />

        <Project
          id='angular'
          title='Angular'
          repo='https://github.com/bravotango/Tour-of-Heroes-Overwatch'
          deployedLocation='https://www.btgraphix.com/overwatch/'
          description='Based on "Angular - Tutorial: Tour of Heroes", added MaterializeCSS, swapped out tutorial characters for characters of Overwatch'
        />
      </div>
    </section>
  );
};

export default Projects;

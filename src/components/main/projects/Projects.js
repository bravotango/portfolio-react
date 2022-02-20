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
          primary='true'
          repo='https://github.com/bravotango/Tech-Blog'
          deployedLocation='https://bt-tech-blog.herokuapp.com/'
          description='This application is a CMS-style blog site similar to a Wordpress site. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.'
        />

        <article id='project-1'></article>
        <article id='employee-tracker'></article>
        <article id='weather'></article>
        <article id='workday'></article>
        <article id='react'></article>
        <article id='angular'></article>
      </div>
    </section>
  );
};

export default Projects;

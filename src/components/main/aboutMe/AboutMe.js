import React from 'react';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <div>
        <h2>About Me</h2>
      </div>
      <div>
        <p>My focus when creating solutions is simplicity.</p>
        <h4>I develop HTML, CSS & JavaScript in:</h4>
        <ul>
          <li>Angular</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>ES6</li>
        </ul>
        <h4>I connect to backend features with:</h4>
        <ul>
          <li>Express</li>
          <li>Sequelize</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
          <li>Apollo</li>
        </ul>
        <h4>
          I
          <abbr title='Create Read Update Delete'>
            <span>CRUD</span>
          </abbr>{' '}
          in databases:
        </h4>
        <ul>
          <li>MySQL2</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

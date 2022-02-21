import React from 'react';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <div>
        <h2>About Me</h2>

        <p>
          I love to laugh. I love being outside. I love playing soccer or riding
          motorcycles with my 2 wonderful children. I love yard work, I practice
          yoga, and during summers we pull our travel trailer on adventures
          around the Pacific Northwest. Our home is in Bothell, protected by
          Hazel, our husky-shepherd and Phishy, our mischievous striped cat.
        </p>
      </div>
      <div>
        <p>
          I like the challenge of displaying information in a simple
          understandable way. I like creating art with pencil, paint,
          instruments, and computers.
        </p>
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
          <li>MS Access</li>
          <li>MySQL2</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

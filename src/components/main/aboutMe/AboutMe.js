import React from 'react';
import Skills from '../skills/Skills';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <div>
        <h2>About Me</h2>

        <p>
          I enjoy laughing, the outdoors, camping, yoga, soccer, motorcycles, my
          kids, my family & friends. Our home is in Bothell, protected by Hazel,
          our husky-shepherd & Soup, our downstairs kitty cat.
        </p>
      </div>
      <div>
        <div>
          <h3>Websites</h3>
          <div>
            <p>
              I love transforming ideas into applications accessible for
              everyone on the web.
            </p>
            <p>My focus when creating solutions is simplicity.</p>
          </div>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;

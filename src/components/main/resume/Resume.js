import React from 'react';
import Skills from '../skills/Skills';

const Resume = () => {
  return (
    <section id='resume'>
      <div>
        <h2>Resume</h2>
      </div>
      <div>
        <div>
          <h3>Download</h3>
          <p>
            <a href='BRIAN_TRACY_2022_Resume.pdf' target='_blank'>
              Resume - Brian Tracy
            </a>
          </p>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Resume;

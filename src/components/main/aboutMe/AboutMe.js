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
        <div>
          <h3>Work History</h3>
          <h4>Microsoft | Actalent Services</h4>
          <p>
            Working as a Software Development Engineer at Microsoft has been
            wonderful. Experiencing the campus before COVID is something I will
            always cherish (on my first day, I remember eating ice cream with my
            new team in the most amazing tree house). I was surrounded with
            great people. My team grew a US-based pilot project to become
            available for commercial customers world-wide. When I started, we
            worked in Angular. As the Angular codebase retired, we built our new
            experience in React available on Microsoft Admin Center. Both code
            bases use TypeScript and deploy code with Azure & Git. I wrote unit
            tests with Jest. I created Figma prototypes for the team when we did
            not have a dedicated UX designer. As the project went international,
            I learned more about localization, accessibility, and the fine
            details of world-wide address validation.
          </p>
          <h4>Premera Blue Cross</h4>
          <p>
            Working as a Software Developer at Premera was quite a ride. Over 16
            years solidified this as my longest tenure. I raised my family
            during my time at Premera and many of my peers felt like family. I
            started building interfaces for Premera in 2002 before CSS
            frameworks were a thing. Premera had many provider relationships
            whose systems required us to support IE 8 (even past the date
            Microsoft supported it). I worked closely with Marketing & Branding
            as I was the only UI developer for many years. As we grew, a UI team
            was created. As part of the UI team, we adopted the Bootstrap CSS
            framework & created reusable Angular components for teams to consume
            (carousels, alerts, cards, accordions, etc.). I became the UI lead
            for the Provider team before my departure.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;

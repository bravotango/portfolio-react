import React from 'react';

const ContactMe = () => {
  return (
    <section id='contactMe'>
      <div>
        <h2>Contact Me</h2>
      </div>
      <div>
        <h3>Address</h3>
        <address>
          Brian Tracy
          <br />
          Bothell, WA 98021
        </address>

        <h3>Email</h3>
        <p>
          <a href='mailto:brian.tracy@btgraphix.com'>
            Brian.Tracy@BTgraphix.com
          </a>
        </p>

        <h3>Mobile</h3>
        <p>
          <a href='tel:425-773-2818'>425.773.2818</a>
        </p>

        <h3>Github</h3>
        <p>
          <a href='https://github.com/bravotango' target='_blank'>
            https://github.com/bravotango
          </a>
        </p>
        <h3>LinkedIn</h3>
        <p>
          <a href='https://www.linkedin.com/in/btgraphix/' target='_blank'>
            https://www.linkedin.com/in/btgraphix/
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;

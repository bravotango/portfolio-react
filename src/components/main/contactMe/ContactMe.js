import React from 'react';
import Form from './form/Form';

const ContactMe = () => {
  return (
    <section id='contactMe'>
      <div>
        <h2>Contact Me</h2>
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
          <a
            href='https://github.com/bravotango/'
            rel='noopener noreferrer'
            target='_blank'
          >
            github.com/bravotango/
          </a>
        </p>
        <h3>LinkedIn</h3>
        <p>
          <a
            href='https://www.linkedin.com/in/btgraphix/'
            rel='noopener noreferrer'
            target='_blank'
          >
            linkedin.com/in/btgraphix/
          </a>
        </p>
        <h3>Website</h3>
        <p>
          <a
            href='https://www.btgraphix.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
            BTgraphix.com/
          </a>
        </p>
      </div>
      {/* <div>
        <h3>Send me a message</h3>
        <div>
          <Form />
        </div>
      </div> */}
    </section>
  );
};

export default ContactMe;

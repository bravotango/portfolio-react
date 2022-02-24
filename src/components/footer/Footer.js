import React from 'react';

const Footer = () => {
  const today = new Date();
  const fullYear = today.getFullYear();
  return (
    <footer>
      <a
        href='https:www.btgraphix.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        BTgraphix.com
      </a>
      {fullYear}
      <div>
        <a href='https://github.com/bravotango' target='_blank'>
          <ion-icon name='logo-github'></ion-icon>
        </a>

        <a href='https://www.linkedin.com/in/btgraphix/' target='_blank'>
          <ion-icon name='logo-linkedin'></ion-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

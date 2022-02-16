import React from 'react';

const Footer = () => {
  const today = new Date();
  const fullYear = today.getFullYear();
  return (
    <footer>
      <a href='https:www.btgraphix.com' target='_blank'>
        BTgraphix.com
      </a>
      {fullYear}
      <a className='up' href='#top'>
        Top of page
      </a>
    </footer>
  );
};

export default Footer;

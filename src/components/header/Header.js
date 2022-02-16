import React from 'react';
import * as myMug from './face-hood.png';
import Navigation from './navigation/Navigation';

const Header = (props) => {
  return (
    <header>
      <section>
        <div className='photo'>
          <img src={myMug} alt='Brian Tracy looking up' />
        </div>
        <div className='status'>
          <h1>
            <span className='first'>Brian</span>
            <span className='last'>Tracy</span>
          </h1>
          <div className='current'>
            <div>
              <p>Creator, Designer, Software Development Engineer</p>
            </div>
          </div>
        </div>
        <Navigation
          activeMainComponent={props.activeMainComponent}
          setActiveMainComponent={props.setActiveMainComponent}
        />
      </section>
    </header>
  );
};

export default Header;

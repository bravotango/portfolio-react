import React, { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  const [activeMainComponent, setActiveMainComponent] = useState('aboutMe');
  return (
    <div className='App'>
      <Header
        activeMainComponent={activeMainComponent}
        setActiveMainComponent={setActiveMainComponent}
      />
      <main>
        <Main activeMainComponent={activeMainComponent} />
      </main>
      <Footer />
      <>
        {/* <header>
        <section>
          <div className='photo'>
            <img src='./images/face-hood.png' alt='photo Brian Tracy' />
          </div>
          <div className='status'>
            <h1>
              <span className='first'>Brian</span>
              <span className='last'>Tracy</span>
            </h1>
            <div className='current'>
              <div>
                <p>Creator, Web Designer, Software Development Engineer</p>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href='#aboutMe'>About Me</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#contactMe'>Contact Me</a>
              </li>
              <li>
                <a href='#resume'>Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </header> */}

        {/* <main>
        <section id='aboutMe'>
          <div>
            <h2>About Me</h2>
          </div>
          <div>
            <p>My focus when creating solutions is simplicity.</p>
            <h4>I develop HTML, CSS & JavaScript in:</h4>
            <ul>
              <li>HTML 5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>ES6</li>
              <li>TypeScript</li>
              <li>Angular</li>
              <li>React</li>
            </ul>
            <h4>I connect to backend features with:</h4>
            <ul>
              <li>Express</li>
              <li>Sequelize</li>
              <li>Mongoose</li>
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

        <section id='projects'>
          <div>
            <h2>Projects</h2>
          </div>
          <div className='articles'>
            <article className='primary' id='tech-blog'></article>
            <article id='project-1'></article>
            <article id='employee-tracker'></article>
            <article id='weather'></article>
            <article id='workday'></article>
            <article id='react'></article>
            <article id='angular'></article>
          </div>
        </section>

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
        <section id='resume'>
          <div>
            <h2>Resume</h2>
          </div>
          <div>
            <h3>Download</h3>
            <p>
              <a href='BRIAN_TRACY_2022_Resume.pdf' target='_blank'>
                Resume - Brian Tracy
              </a>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <a href='https:www.btgraphix.com' target='_blank'>
          BTgraphix.com
        </a>
        <script>
          var today = new Date(); document.write(today.getFullYear());
        </script>
        <a className='up' href='#top'>
          Top of page
        </a>
      </footer>
      <script src='scripts.js'></script> */}
      </>
    </div>
  );
}

export default App;

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
    </div>
  );
}

export default App;

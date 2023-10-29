import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Service from './components/Service';
import Skill from './components/Skill';
import Project from './components/Project';
import Contanct from './components/Contanct';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='home bg-black' >
      <Header />
      <About />
      <Resume   />
      <Service />
      <Skill />
      <Project />
      <Contanct  />
      <Footer/>
    </div>
  );
}

export default App;

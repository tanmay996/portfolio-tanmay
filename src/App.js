import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Service from './components/Service';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for data fetching or content loading
    const timeout = setTimeout(() => {
      setLoading(false);
      // Initialize AOS when the content is loaded
      AOS.init({
        // AOS configuration options
        // duration: 800,
        // Other options...
      });
    }, 3000); // Simulated 2-second delay for demonstration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='home bg-black' >

      {loading ? (
        // Loader component while content is loading
        <div id="loader">
          <div class="loader-gif"></div>
        </div>
      ) : (
        // Content with AOS animations
        <div className='myhome'>
          <Header />
          <About />
          <Resume />
          <Service />
          <Skill />
          <Project />
          <Contact />
          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ zIndex: 20000 }}
          />
        </div>
      )}
    </div>
  );
}

export default App;

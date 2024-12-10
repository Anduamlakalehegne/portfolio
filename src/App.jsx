import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';
import Footer from './components/Footer/Footer';
import Snowfall from 'react-snowfall';
import Particle from './Particle';
import Education from './components/Education/Education';


function App() {
  return (
    <div className="app">
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
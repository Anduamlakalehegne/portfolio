import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import './App.css';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Circles } from 'react-loader-spinner'; 
import { useState, useEffect } from 'react';
import Particle from './Particle';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch('/count')
      .then(response => response.json())
      .then(data => setVisitorCount(data.count))
      .catch(error => console.error("Error fetching visitor count:", error));
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set your loading time (in ms)
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <Circles color="#646CFF" height={80} width={80} />
      </div>
    );
  }

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
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import NavBar from './NavBar'; // Adjust the path as necessary to where your NavBar component is located


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />




        {/* More routes with the new element prop */}
      </Routes>
    </Router>
  );
}




export default App;



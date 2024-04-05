import React from 'react';
import styles from './HomePage.module.css'; // Ensure you create a corresponding CSS module
import NavBar from './NavBar';

import backgroundImage from './a.jpeg'; // Importing the image from the same directory

const HomePage = () => (
  <div style={{ 
      backgroundImage: `url(${backgroundImage})`, 

      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',// Adjust to focus on a specific part of the image
      height: '100vh', // This makes sure that the background covers the full viewport height
      width: '100vw' // Ensures the background covers the full viewport width
    }}>
    <NavBar />
    <div className={styles.homeContainer} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Deepak Kathuria, a Software Developer with a passion for building scalable web applications and engaging user experiences.</p>
      <p>Explore my projects, skills, and experiences to learn more about my journey and capabilities.</p>
    </div>
  </div>
);

export default HomePage;
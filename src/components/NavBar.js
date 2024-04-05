import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; // Ensure you create a corresponding CSS module

const NavBar = () => (
  <nav className={styles.navContainer}>
    <Link to="/" className={styles.navItem}>Home</Link>
    <Link to="/about" className={styles.navItem}>About Me</Link>
    <Link to="/experience" className={styles.navItem}>Experience</Link>
    <Link to="/projects" className={styles.navItem}>Projects</Link>
    <Link to="/skills" className={styles.navItem}>Skills</Link>
    <Link to="/contact" className={styles.navItem}>Contact</Link>
  </nav>
);

export default NavBar;

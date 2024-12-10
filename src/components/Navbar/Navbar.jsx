import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.bracket}>&lt;</span>
        Anduamlak
        <span className={styles.slash}>/</span>
        Alehegne
        <span className={styles.bracket}>&gt;</span>
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#cv">Resume</a>
      </div>
      <button className={styles.githubButton}>Github Profile</button>
    </nav>
  );
};

export default Navbar;
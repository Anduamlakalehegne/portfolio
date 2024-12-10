import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.curve}></div>
      <h2 className={styles.title}>
      <div className={styles.logo}>
        <span className={styles.bracket}>&lt;</span>
        Anduamlak 
        <span className={styles.slash}> / </span>
        Alehegne
        <span className={styles.bracket}>&gt;</span>
      </div>
      </h2>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
      <div className={styles.socialIcons}>
        <a href="#facebook" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#twitter" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#linkedin" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
      <p className={styles.copyright}>
        © 2024 Anduamlak Alehegne. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

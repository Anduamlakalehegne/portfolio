import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const sidebarRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest(`.${styles.menuToggle}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuClick = (href) => {
    setActiveSection(href.slice(1));
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.bracket}>&lt;</span>
        Anduamlak
        <span className={styles.slash}>/</span>
        Alehegne
        <span className={styles.bracket}>&gt;</span>
      </div>
      <div className={styles.desktopMenu}>
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? styles.active : ''}
            onClick={() => handleMenuClick(item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.githubButton}>
          <FaGithub />
          <a
            href='https://github.com/Anduamlakalehegne'
            style={{ textDecoration: 'none', color: 'white' }}
            target="_blank"
            rel="noopener noreferrer"
          >Github Profile
          </a>
        </button>
        {/* <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button> */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={sidebarRef}
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>
              <FaTimes />
            </button>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? styles.active : ''}
                onClick={() => handleMenuClick(item.href)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../../data/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRegPlusSquare } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const filteredProjects = filter === 'ALL'  
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
      </motion.p>

      <motion.div 
        className={styles.projectsGrid}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className={styles.projectCard}
            variants={cardVariants}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
            onClick={() => openProjectDetails(project)}
          >
            <div className={styles.projectImageWrapper}>
              <img src={project.image} alt={project.title} />
              <div className={styles.projectOverlay}>
                <span><FaRegPlusSquare size={30} /></span>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <motion.div 
              className={styles.popup}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeProjectDetails}>&times;</button>
              <h3>{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p>{selectedProject.description}</p>
              <div className={styles.techStack}>
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

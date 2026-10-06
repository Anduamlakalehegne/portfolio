import React, { useState } from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../../data/projectsData';
import { FaGithub, FaExternalLinkAlt, FaRegPlusSquare } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = [
  { id: 'ALL', label: 'ALL' },
  { id: 'BANKING', label: 'BANKING ENTERPRISE' },
  { id: 'ECOMMERCE', label: 'E-COMMERCE / FINTECH' },
  { id: 'SAAS', label: 'ENTERPRISE SAAS' },
  { id: 'ARCHITECTURE', label: 'EVENT-DRIVEN ARCHITECTURE' }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'BANKING') {
      return project.category.includes('BANKING');
    }
    if (activeFilter === 'ECOMMERCE') {
      return project.category.includes('E-COMMERCE') || project.category.includes('FINTECH');
    }
    if (activeFilter === 'SAAS') {
      return project.category.includes('SAAS') || project.category.includes('ENTERPRISE') && !project.category.includes('BANKING');
    }
    if (activeFilter === 'ARCHITECTURE') {
      return project.category.includes('EVENT-DRIVEN') || project.category.includes('ARCHITECTURE');
    }
    return project.category === activeFilter;
  });

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projects}>
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        Featured Projects & Architecture
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
      >
        Production-grade banking platforms, event-driven microservices, enterprise SaaS, and full-stack applications with verified metrics.
      </motion.p>

      {/* Filter Tabs */}
      <motion.div
        className={styles.filterContainer}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.activeFilterBtn : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid with layout animation */}
      <motion.div layout className={styles.projectsGrid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => openProjectDetails(project)}
            >
              <div className={styles.projectImageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className={styles.projectOverlay}>
                  <span>
                    <FaRegPlusSquare size={28} />
                  </span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.categoryBadge}>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description.slice(0, 130)}{project.description.length > 130 ? '...' : ''}</p>

                {Array.isArray(project.metrics) && project.metrics.length > 0 && (
                  <div className={styles.techStack} style={{ marginBottom: '0.6rem' }}>
                    {project.metrics.map((m, mi) => (
                      <span key={mi} className={styles.metricBadge}>
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.techStack}>
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span key={techIndex}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span>+{project.technologies.length - 6} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup */}
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
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={closeProjectDetails}
                aria-label="Close details"
              >
                &times;
              </button>
              <span className={styles.categoryBadge}>{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />

              {Array.isArray(selectedProject.metrics) && selectedProject.metrics.length > 0 && (
                <div className={styles.techStack} style={{ margin: '0.8rem 0' }}>
                  {selectedProject.metrics.map((m, mi) => (
                    <span key={mi} className={styles.metricBadge}>
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <p>{selectedProject.description}</p>

              {Array.isArray(selectedProject.highlights) && selectedProject.highlights.length > 0 && (
                <div style={{ margin: '1rem 0' }}>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Key Architectural Highlights:</h4>
                  <ul style={{ margin: '0 0 0 1.2rem', padding: 0, color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {selectedProject.highlights.map((h, hi) => (
                      <li key={hi} style={{ marginBottom: 4 }}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.techStack} style={{ marginTop: '1rem' }}>
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> View Live
                  </a>
                )}
                {!selectedProject.liveLink && !selectedProject.githubLink && (
                  <span style={{ color: '#94a3b8', fontSize: '0.88rem', fontStyle: 'italic', padding: '0.5rem' }}>
                    (Internal banking / enterprise system — source code confidential)
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

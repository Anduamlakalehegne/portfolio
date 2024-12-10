import React, { useState } from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.subtitle}>
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
      </p>

      <div className={styles.filters}>
        {['ALL', 'WEB APP\'S', 'ANDROID APP\'S', 'MACHINE LEARNING'].map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
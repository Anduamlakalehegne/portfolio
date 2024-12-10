import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Skills.module.css';
import { skillsData } from '../../data/skillsData';

const SkillCard3D = ({ children }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return; 
    const rect = ref.current.getBoundingClientRect(); 
    const width = rect.width; 
    const height = rect.height; 

    const mouseX = e.clientX - rect.left; 
    const mouseY = e.clientY - rect.top; 

    const xPct = mouseX / width - 0.5; 
    const yPct = mouseY / height - 0.5; 

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className={styles.cardContainer}>
      <motion.div
        ref={ref}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {children}
        <motion.div
          className={styles.cardBorder}
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
            width: hovered ? '100%' : 0,
            height: hovered ? '100%' : 0,
          }}
        />
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <p className={styles.subtitle}>
        Here are some of my skills on which I have been working on for the past 3 years.
      </p>

      <div className={styles.skillsContainer}>
        {skillsData.map((category, index) => (
          <SkillCard3D key={index}>
            <div className={styles.skillCard}>
              <h3>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </SkillCard3D>
        ))}
      </div>
    </section>
  );
};

export default Skills;

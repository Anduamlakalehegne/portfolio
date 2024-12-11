import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation, useInView } from 'framer-motion';
import styles from './Skills.module.css';
import { skillsData } from '../../data/skillsData';

const SkillCard3D = ({ children, index }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(ref, { once: true });

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
    <motion.div
      ref={ref}
      className={styles.cardContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
     <motion.div
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          scale: hovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const SkillItem = ({ skill, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={styles.skillItem}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={skill.icon} alt={skill.name} />
      <span>{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        viewport={true}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my skills on which I have been working on for the past 3 years.
      </motion.p>

      <div className={styles.skillsContainer}>
        {skillsData.map((category, index) => (
          <SkillCard3D key={index} index={index}>
            <div className={styles.skillCard}>
              <h3>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} skill={skill} index={skillIndex} />
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

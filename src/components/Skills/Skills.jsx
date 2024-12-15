import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation, useInView } from 'framer-motion';
import styles from './Skills.module.css';
import { skillsData } from '../../data/skillsData';

const SkillCard3D = ({ children, index }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
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
          stiffness: 4,
          damping: 1,
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
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { opacity: 1, y: 1, scale: 1 },
      }}
      // initial="hidden"
      animate={controls}
      transition={{ duration: 0.1, delay: index * 0.1, type: "spring" }}
      viewport={{ once: false, amount: 0.5 }}

      // key={skillIndex}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      // viewport={{ once: false, amount: 0.5 }}
      // transition={{ duration: 0.3, delay: 0.4 + skillIndex * 0.05 }}
    >
      <motion.img 
        src={skill.icon} 
        alt={skill.name}
        // initial={{ rotate: 0 }}
        // animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.section 
      id="skills" 
      className={styles.skills} 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
        hidden: {},
      }}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, type: "spring" }}
      >
        Skills
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        Here are some of my skills on which I have been working on for the past 3+ years.
      </motion.p>

      <motion.div 
        className={styles.skillsContainer}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, type: "spring" }}
      >
        {skillsData.map((category, index) => (
          <SkillCard3D key={index} index={index}>
            <motion.div 
              className={styles.skillCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 1,type: "spring", stiffness: 5, }}
              >
                {category.title}
              </motion.h3>
              <div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
              className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          </SkillCard3D>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;

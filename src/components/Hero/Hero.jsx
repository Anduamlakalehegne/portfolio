import React, { useState, useRef } from 'react';
import styles from './Hero.module.css';
import img from '../../assets/profile2.jpeg'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
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
    <section className={styles.hero} id="about">
      <div className={styles.imageContainer}>
        <motion.div
          ref={ref}
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
          <div className={styles.imageWrapper}>
            <img
              className={styles.profileImage}
              src={img}
              alt="Anduamlak Alehegne"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>

      <div className={styles.content}>
        <h1>Hello I'm</h1>
        <h2>Anduamlak Alehegne</h2>
        <div className={styles.subtitle}>
          <span className={styles.highlight}>Software Developer</span>
        </div>
        <p className={styles.description}>
          I excel at crafting elegant digital experiences and
          I am proficient in various programming languages and
          technologies.
        </p>
        <button className={styles.resumeButton}>Download Resume</button>
      </div>
    </section>
  );
};

export default Hero;


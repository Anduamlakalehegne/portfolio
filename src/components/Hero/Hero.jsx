import React, { useState, useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import img from '../../assets/profile2.jpeg';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimation } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

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

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 25, staggerChildren: 0.1 } });
  }, [controls]);


  const [scrollDirection, setScrollDirection] = useState('down');
  // const controls = useAnimation();

  // Scroll event listener to detect scroll direction
  const handleScroll = () => {
    if (window.scrollY > 100) { // Optional threshold for when to start animating
      setScrollDirection(window.scrollY > prevScrollY ? 'down' : 'up');
    }
    prevScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Trigger animation based on scroll direction
    if (scrollDirection === 'down') {
      controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ x: 100, opacity: 0, transition: { duration: 1 } });
    }
  }, [scrollDirection, controls]);

  return (
    <section className={styles.hero} id="about">
      <motion.div
        className={styles.imageContainer}
        style={{ y: y1 }}
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
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
            type: 'spring',
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
      </motion.div>

      <motion.div
        className={styles.content}
        style={{
          x: scrollDirection === 'down' ? 0 : 100,
          opacity: scrollDirection === 'down' ? 1 : 0
        }}
        initial={{ opacity: 0, x: 100 }} // Start position is from right (100)
        animate={controls} // Controls animation based on scroll direction
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: 20 }, // Start from right
            visible: { opacity: 1, x: 0 },  // End at normal position
          }}
        >
          Hello I'm
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Anduamlak Alehegne
        </motion.h2>
        <motion.div
          className={styles.subtitle}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className={styles.highlight}>Software Developer</span>
        </motion.div>
        <motion.p
          className={styles.description}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          I excel at crafting elegant digital experiences and
          I am proficient in various programming languages and
          technologies.
        </motion.p>
        <motion.button
          className={styles.resumeButton}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Download Resume
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

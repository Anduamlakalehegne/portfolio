import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import img from '../../assets/mesita21.jpg';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimation, useInView } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const imageRef = useRef(null); 
  const contentRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  // const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    console.log('isInView:', isInView); // Log the in-view status
    if (isInView) {
      console.log('Animation started'); // Log when animation starts
      controls.start('show'); // Trigger the show animation
    } else {
      console.log('Animation stopped'); // Log when animation stops
      controls.start('hidden'); // Reset to hidden state when not in view
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 }, // Start slightly zoomed out
    show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }, // Zoom in to original size
  };

  const handleDownloadResume = () => {
  window.open('https://drive.google.com/uc?export=download&id=14eqzGmsCGqJ8Lg3rMyNFbZfdzu930U6c', '_blank');
};

  return (
    <section ref={ref} className={styles.hero} id="about">
      <motion.div
        ref={imageRef}
        className={styles.imageContainer}
        style={{ y: imageY, opacity: imageOpacity }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className={styles.card}
          style={{
            rotateX,
            rotateY,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        >
          <div className={styles.imageWrapper}>
            <motion.img
              className={styles.profileImage}
              src={img}
              alt="Anduamlak Alehegne"
              variants={imageVariants}
              initial="hidden"
              animate={controls}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={contentRef}
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 variants={itemVariants}>
          Hello I'm
        </motion.h1>
        <motion.h2 variants={itemVariants}>
          Anduamlak Alehegne
        </motion.h2>
        <motion.div className={styles.subtitle} variants={itemVariants}>
          <span className={styles.highlight}>Full-Stack Developer</span>
        </motion.div>
        <motion.p className={styles.description} variants={itemVariants}>
          I specialize in building dynamic, user-friendly web applications using the latest technologies.
          From crafting seamless front-end interfaces to developing robust back-end systems, I bring ideas
          to life with clean, efficient code. Let's turn your vision into reality!
        </motion.p>
        <motion.button 
        className={styles.resumeButton} 
        variants={itemVariants}
        onClick={handleDownloadResume}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

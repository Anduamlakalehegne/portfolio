import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import img from '../../assets/mesita21.jpg';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimation, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { trackEvent } from '../../utils/analytics';

const Hero = () => {
  const ref = useRef(null);
  const imageRef = useRef(null); 
  const contentRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
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

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const handleDownloadResume = () => {
    trackEvent('resume_download', { file_name: 'Anduamlak_Alehegne_Resume.pdf' });
    const resumeUrl = `${import.meta.env.BASE_URL}Anduamlak_Alehegne_Resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Anduamlak_Alehegne_Resume.pdf');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          whileHover={{ scale: 1.03 }}
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
        <motion.div variants={itemVariants} className={styles.subtitle} style={{ marginBottom: '0.25rem', color: '#818cf8', fontSize: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
          Senior Full-Stack Engineer
        </motion.div>
        <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15, fontWeight: 800, margin: '0 0 0.5rem 0' }}>
          Anduamlak Alehegne
        </motion.h1>
        
        {/* Credibility badges */}
        <motion.div className={styles.metricsRow} variants={itemVariants}>
          <span className={styles.badge}>
            🏆 CEO Recognition Award Winner
          </span>
          <span className={styles.badge}>
            🏦 3.6M+ Users · 441+ Branches
          </span>
          <span className={styles.badge}>
            ⚡ 800+ msgs/sec Kafka Pipeline
          </span>
        </motion.div>

        <motion.p className={styles.description} variants={itemVariants}>
          4+ years architecting and scaling mission-critical web applications and distributed backend services. Proven track record in regulated banking environments delivering real-time operations dashboards, event-driven microservices, resilient APIs, and production Next.js & NestJS platforms.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <motion.button 
            className={styles.resumeButton} 
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
          <motion.a
            href="#projects"
            className={styles.outlineButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.outlineButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: 16, marginTop: 20, alignItems: 'center', fontSize: '1.25rem' }}
        >
          <a
            href="https://github.com/Anduamlakalehegne"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            title="GitHub Profile"
            onClick={() => trackEvent('contact_click', { platform: 'GitHub', location: 'Hero' })}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anduamlak-alehegne"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            title="LinkedIn Profile"
            onClick={() => trackEvent('contact_click', { platform: 'LinkedIn', location: 'Hero' })}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:anduamlakalehegne@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            title="Email Me"
            onClick={() => trackEvent('contact_click', { platform: 'Email', location: 'Hero' })}
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <motion.footer 
      ref={footerRef}
      className={styles.footer}
      style={{ opacity }}
    >
      <motion.div 
        className={styles.curve}
        style={{
          scaleY: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
        }}
      ></motion.div>
      <motion.div
        className={styles.content}
        style={{ scale: scaleSpring, y: ySpring }}
      >
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.logo}>
            <motion.span 
              className={styles.bracket}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &lt;
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Anduamlak 
            </motion.span>
            <motion.span 
              className={styles.slash}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {' / '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Alehegne
            </motion.span>
            <motion.span 
              className={styles.bracket}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              &gt;
            </motion.span>
          </div>
        </motion.h2>
        <motion.nav 
          className={styles.nav}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item, index) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
        <motion.div 
          className={styles.socialIcons}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[ 
            { Icon: FaFacebook, label: 'Facebook', href: 'https://web.facebook.com/anduamlak.alehegne.79' },
            { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anduaml-alehegne-4632aa219/' },
            { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/na.ndu_27/', target: "_blank", rel: "noopener noreferrer" },
          ].map(({ Icon, label, href }, index) => (
            <motion.a 
              key={label} 
              href={href} 
              aria-label={label}
              target="_blank"  // Open in new tab
              rel="noopener noreferrer"  // Security measure
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          © 2025 Anduamlak Alehegne. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

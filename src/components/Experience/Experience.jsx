import React, { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Experience.module.css';
import { experienceData } from '../../data/experienceData';

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section 
      ref={ref}
      id="experience" 
      className={styles.experience}
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Experience & Leadership
      </motion.h2>
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
      >
        Over 4 years delivering scalable architecture, enterprise security, and verified business outcomes in fintech and AI.
      </motion.p>

      {/* Official CEO Commendation Spotlight */}
      <motion.div
        className={styles.recognitionCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.recognitionHeader}>
          <span className={styles.recognitionBadge}>
            ★ Executive Commendation
          </span>
          <h3 className={styles.recognitionTitle}>
            CEO Recognition for Engineering Excellence
          </h3>
        </div>
        <p className={styles.recognitionQuote}>
          "I would like to extend my sincere appreciation for your exceptional contribution to the successful design, development, and deployment of the FX Queue Management System. Your dedication, professionalism, and technical competence played a key role... Your efforts have set a strong standard of excellence for our team and the bank."
        </p>
        <div className={styles.recognitionFooter}>
          <div>
            <div className={styles.signerName}>Dr. Aklilu Wubet (PhD)</div>
            <div className={styles.signerRole}>Chief Executive Officer</div>
          </div>
          <div className={styles.recognitionOrg}>
            Wegagen Bank Headquarters · Nov 27, 2025
          </div>
        </div>
      </motion.div>

      <VerticalTimeline lineColor='#646cff'>
        {experienceData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            dateClassName={styles.date}
            iconStyle={{ 
              background: '#ffffff', 
              boxShadow: '0 0 0 4px #646cff, 0 4px 14px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px'
            }}
            icon={
              <div className={styles.companyLogoWrapper}>
                <motion.img 
                  src={exp.companyLogo} 
                  alt={exp.company} 
                  className={styles.companyLogo}
                />
              </div>
            }
            contentStyle={{
              background: 'rgba(23, 23, 33, 0.95)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', 
              borderRadius: '8px',
            }}
            contentArrowStyle={{ 
              borderRight: '10px solid rgba(23, 23, 33, 0.95)',
              boxShadow: 'rgba(23, 92, 230, 0.15) 0px 1px 24px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>{exp.role}</h3>
              <h4 style={{ fontSize: '1rem', color: '#818cf8', margin: '0 0 12px 0', fontWeight: 500 }}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
              
              {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                <ul style={{ margin: '10px 0 16px 20px', padding: 0, color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {exp.achievements.map((item, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>{item}</li>
                  ))}
                </ul>
              )}

              <div className={styles.skills}>
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;

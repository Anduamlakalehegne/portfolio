import React, { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Education.module.css';
import { educationData } from '../../data/educationData';

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start end", "end start"],
  }); 

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section ref={ref} id="education" className={styles.experience}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Education
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      >
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </motion.p>

      <VerticalTimeline lineColor="#646cff">
        {educationData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            dateClassName={styles.date}
            iconStyle={{ background: '#646cff', color: '#fff' }}
            icon={
              <motion.img
                src={exp.companyLogo}
                alt={exp.company}
                className={styles.companyLogo}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            }
            contentStyle={{
              background: 'rgba(23, 23, 33, 0.9)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
              borderRadius: '6px',
            }}
            contentArrowStyle={{
              borderRight: '10px solid rgba(23, 23, 33, 0.9)',
              boxShadow: 'rgba(23, 92, 230, 0.15) 0px 1px 24px',
            }}
          >
            <motion.div
              className={styles.cardContent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <img
                  src={exp.companyLogo}
                  alt={`${exp.company} Logo`}
                  className={styles.cardImage}
                />
                <div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
              </div>
              <p className={styles.description}>{exp.description}</p>
              <motion.div
                className={styles.skills}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {exp.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.4 + skillIndex * 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Education;


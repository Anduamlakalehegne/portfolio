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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section 
      ref={ref}
      id="experience" 
      className={styles.experience}
      // style={{ opacity, scale }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Experience
      </motion.h2>
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      >
        My work experience as a software engineer, working at various companies and on diverse projects.
      </motion.p>

      <VerticalTimeline lineColor='#646cff'>
        {experienceData.map((exp, index) => (
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
                // initial={{ rotate: 0 }}
                // animate={{ rotate: 360 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
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

export default Experience;


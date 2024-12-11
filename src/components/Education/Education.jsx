import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Education.module.css';
import { experienceData } from '../../data/experienceData';

const Education = () => {
  return (
    <section id="education" className={styles.experience}>
      <h2>Education</h2>
      <p className={styles.subtitle}>My work experience as a software engineer, working at various companies and on diverse projects.</p>

      <VerticalTimeline lineColor='#646cff'>
        {experienceData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            dateClassName={styles.date}
            iconStyle={{ background: '#646cff', color: '#fff' }}
            icon={<img src={exp.companyLogo} alt={exp.company} className={styles.companyLogo} />}
            contentStyle={{
              display:'flex',
              flexDirection:'column',
              background: 'rgba(23, 23, 33, 0.9)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', 
              borderRadius: '6px',
            }}
            contentArrowStyle={{ borderRight: '10px solid rgba(23, 23, 33, 0.9)' }}
          >
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.skills}>
              {exp.skills.map((skill, skillIndex) => (
                <span key={skillIndex}>{skill}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;

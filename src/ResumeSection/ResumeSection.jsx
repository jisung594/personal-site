import React from 'react';
import styles from './ResumeSection.module.css';
import { MyButton } from '../stories/MyButton/MyButton';

export const ResumeSection = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeContainer}>
        <h2 className={styles.resumeTitle}>Resume</h2>

        <div className={styles.resumeContent}>
          <p className={styles.resumeDescription}>Choose your preferred format:</p>
          <div className={styles.resumeDownloads}>
            <MyButton 
              primary
              label="PDF"
              href="/resume/jonathan-choi-resume.pdf" 
            />
            
            <MyButton
              label="ATS"
              href="/resume/jonathan-choi-resume-ats.docx"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

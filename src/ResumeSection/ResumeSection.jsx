import React from 'react';
import styles from './ResumeSection.module.css';
import { MyButton } from '../stories/MyButton/MyButton';

export const ResumeSection = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeContainer}>
        <h2 className={styles.resumeTitle}>RESUME</h2>

        <div className={styles.resumeContent}>
          <p className={styles.resumeDescription}>Choose your preferred format:</p>
          <div className={styles.resumeDownloads}>
            <MyButton 
              primary 
              label="PDF" 
              href="/resume/jonathan-choi-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

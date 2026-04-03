import React from 'react';
import styles from './ResumeSection.module.css';
import { Button } from '../stories/Button';

export const ResumeSection = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeContainer}>
        <h2 className={styles.resumeTitle}>Resume</h2>

        <div className={styles.resumeContent}>
          <p className={styles.resumeDescription}>Choose your preferred format:</p>
          <div className={styles.resumeDownloads}>
            <Button 
              primary
              isActive={true}
              href="/resume/jonathan-choi-resume.pdf" 
              download="jonathan-choi-resume.pdf"
            >
              PDF
            </Button>
            
            <Button
              isActive={true}
              href="/resume/jonathan-choi-resume-ats.docx"
              download="jonathan-choi-resume-ats.docx"
            >
              ATS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

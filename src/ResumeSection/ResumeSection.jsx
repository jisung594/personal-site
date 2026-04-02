import React from 'react';
import styles from './ResumeSection.module.css';
import { Button } from '../stories/Button';

export const ResumeSection = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeContainer}>
        <h2 className={styles.resumeTitle}>Resume</h2>
        
        <div className={styles.resumeDownloads}>
          <Button 
            primary
            isActive={true}
            href="/resume/Jon_Choi_Resume.pdf" 
            download="jon-choi-resume.pdf"
          >
            PDF
          </Button>
          
          <Button
            isActive={true}
            href="/resume/Jon_Choi_Resume_ATS.docx"
            download="jon-choi-resume-ats.docx"
          >
            ATS
          </Button>
        </div>
      </div>
    </section>
  );
};

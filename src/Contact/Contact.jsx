import React from 'react';
import styles from './Contact.module.css';

export const Contact = ({ ...props }) => {
  return (
    <div className={`${styles.contact} ${styles.fullHeight}`}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>
            I combine design thinking with engineering execution to build effective user experiences.
          </p>
          <br/>
          <p className={styles.subtitle}>
            Looking forward to discussing how I can contribute to your team!
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.contactMethods}>
            <div className={styles.contactList}>
              <a 
                href="mailto:jonjichoi@gmail.com" 
                className={styles.contactLink}
              >
                <span className={styles.contactType}>Email</span>
                <span className={styles.contactValue}>jonjichoi@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jonathanchoi594/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.contactType}>LinkedIn</span>
                <span className={styles.contactValue}>/in/jonathanchoi594</span>
              </a>
              
              <a 
                href="https://github.com/jisung594" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.contactType}>GitHub</span>
                <span className={styles.contactValue}>/jisung594</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

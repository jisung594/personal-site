import styles from './About.module.css';
import { ResumeSection } from '../ResumeSection/ResumeSection';

export const About = ({ ...props }) => {
  return (
    <div className={`${styles.about} ${styles.fullHeight}`}>
      <div className={styles.generalInfo}>
        <h1 className={styles.generalTitle}>About</h1>
        <p className={styles.bio}>
          Design engineer with a focus on building efficient, maintainable frontend systems. 
          I bridge design and engineering to create performant interfaces that deliver intuitive user experiences.
        </p>
        <div className={styles.location}>
          <p>Based in <strong>Chicago, IL</strong></p>
          <p>Open to <strong>remote + hybrid</strong> opportunities</p>
        </div>
      </div>

      <div className={styles.experience}>
        <h1 className={styles.experienceTitle}>Technical Skills</h1>
        <div className={styles.skillsGrid}>
          <div className={styles.skillsCategory}>
            <h3>FRONTEND</h3>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML / CSS</li>
              <li>Tailwind</li>
              <li>Storybook</li>
            </ul>
          </div>
          <div className={styles.skillsCategory}>
            <h3>CMS & BACKEND</h3>
            <ul>
              <li>PHP</li>
              <li>Drupal</li>
              <li>Firebase</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className={styles.skillsCategory}>
            <h3>DESIGN</h3>
            <ul>
              <li>Figma</li>
              <li>Affinity Designer</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </div>
          <div className={styles.skillsCategory}>
            <h3>TESTING & TOOLS</h3>
            <ul>
              <li>Git</li>
              <li>Lighthouse</li>
              <li>Behat</li>
              <li>Postman</li>
              <li>Drush</li>
            </ul>
          </div>
        </div>
      </div>
      
      <ResumeSection />
    </div>
  )
}
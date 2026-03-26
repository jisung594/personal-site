import styles from './About.module.css';

export const About = ({ ...props }) => {
  return (
    <div className={`${styles.about} ${styles.fullHeight}`}>
      <div className={styles.generalInfo}>
        <h1 className={styles.generalTitle}>About</h1>
        <p className={styles.bio}>
          Software engineer focused on building efficient, maintainable frontend systems. 
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
            <h3>CORE</h3>
            <ul>
              <li>React</li>
              <li>JavaScript/TypeScript</li>
              <li>HTML/CSS</li>
              <li>Angular</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className={styles.skillsCategory}>
            <h3>CMS & BACKEND</h3>
            <ul>
              <li>Drupal</li>
              <li>PHP</li>
              <li>Twig</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className={styles.skillsCategory}>
            <h3>TESTING</h3>
            <ul>
              <li>Behat</li>
              <li>Cypress</li>
              <li>Storybook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoUrl from '../assets/logo_white.png';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.infoSection}>
            <h3>JONATHAN CHOI</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                E:
                <a href="mailto:jonjichoi@gmail.com">jonjichoi@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                P:
                <a href='tel:+19786044087'>(978) 604-4087</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <nav className={styles.footerNav}>
            <Link to="/">HOME</Link>
            <span className={styles.divider}>|</span>
            <Link to="/about">ABOUT</Link>
            <span className={styles.divider}>|</span>
            <Link to="/contact">CONTACT</Link>
          </nav>
        </div>

      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/jonathanchoi594">
              <img src={`${process.env.PUBLIC_URL}/images/social/linkedin.png`} alt="Jonathan Choi LinkedIn Profile" />
            </a>
            <span className={styles.divider}>|</span>
            <a href="https://github.com/jisung594">
                <img src={`${process.env.PUBLIC_URL}/images/social/github.png`} alt="Jonathan Choi GitHub Profile" />
              </a>
            </div>
          <div className={styles.footerCopyright}>
            <p className={styles.footerCopyrightText}>&copy; 2026 Jonathan Choi. All Rights Reserved.</p>
          </div>
        </div>

        <div>
          <img 
            src={logoUrl} 
            alt="Site logo" 
            className={styles.footerLogo}
          />
        </div>

      </div>
    </div>
  );
}

export default Footer;

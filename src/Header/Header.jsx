import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logoUrl from '../assets/logo_main.png';
import iconHamburger from '../assets/icon_hamburger.png';
import iconClose from '../assets/icon_close.png';

export const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]); // Close menu on route change

  const headerShadowClass = styles.headerLightShadow;

  return (
    <div className={`${styles.header} ${headerShadowClass}`}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logoUrl} alt="Site logo" />
        </NavLink>
        
      </div>
      {/* Desktop nav */}
      <nav className={styles.navDesktop}>
        <NavLink to="/" className={styles.navLink}>HOME</NavLink>
        <NavLink to="/about" className={styles.navLink}>ABOUT</NavLink>
        <NavLink to="/contact" className={styles.navLink}>CONTACT</NavLink>
      </nav>
      <button 
        className={styles.menuButton} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <img src={menuOpen ? iconClose : iconHamburger} alt="" />
      </button>

      {/* Mobile nav */}
        <div className={`${styles.mobileMenuOverlay} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.navMobile}>
            <NavLink to="/" className={styles.navLink}>HOME</NavLink>
            <NavLink to="/about" className={styles.navLink}>ABOUT</NavLink>
            <NavLink to="/contact" className={styles.navLink}>CONTACT</NavLink>
          </nav>
        </div>
    </div>
  );
}

export default Header;

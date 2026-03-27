import React, { useEffect, useState } from 'react';
import styles from './LogoReveal.module.css';

export const LogoReveal = ({ logoSrc, alt = "Logo", onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure DOM is ready

    const timer2 = setTimeout(() => {
      setShowLogo(true);
    }, 800); // Logo starts to emerge after black screen

    const timer3 = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 4000); // Animation complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  return (
    <div className={`${styles.logoReveal} ${isVisible ? styles.visible : ''}`}>
      <div className={`${styles.blackScreen} ${showLogo ? styles.fadeOut : ''}`} />
      <div className={`${styles.logoContainer} ${showLogo ? styles.emerge : ''}`}>
        <img 
          src={logoSrc} 
          alt={alt}
          className={styles.logo}
        />
        <div className={`${styles.particleContainer} ${showLogo ? styles.showParticles : ''}`}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.2}s` }} />
          ))}
        </div>
        <div className={`${styles.welcomeText} ${showLogo ? styles.showText : ''}`}>
          WELCOME
        </div>
      </div>
    </div>
  );
};

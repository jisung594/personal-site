import { useState, useEffect, useRef } from 'react';
import styles from './LiquidMorphText.module.css';

export const LiquidMorphText = ({ text, delay = 0, isActive = false, isButton = false, primary = false, href = '#' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimated.current) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        hasAnimated.current = true;
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isActive, delay]);

  const Tag = isButton ? 'a' : 'h1';
  const className = isButton 
    ? `${styles.liquidMorphText} ${styles.button} ${primary ? styles.primary : styles.secondary} ${isAnimating ? styles.morphed : ''}`
    : `${styles.liquidMorphText} ${isAnimating ? styles.morphed : ''}`;

  const props = isButton ? { href, className } : { className };

  return (
    <Tag {...props}>
      {text}
    </Tag>
  );
};

export default LiquidMorphText;

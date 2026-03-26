import { useState, useEffect, useRef } from 'react';
import styles from './LiquidMorphText.module.css';

export const LiquidMorphText = ({ text, delay = 0, isActive = false }) => {
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

  return (
    <h1 className={`${styles.liquidMorphText} ${isAnimating ? styles.morphed : ''}`}>
      {text}
    </h1>
  );
};

export default LiquidMorphText;

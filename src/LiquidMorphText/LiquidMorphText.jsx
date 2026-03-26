import { useState, useEffect } from 'react';
import styles from './LiquidMorphText.module.css';

export const LiquidMorphText = ({ text, delay = 0 }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1 className={`${styles.liquidMorphText} ${isAnimating ? styles.morphed : ''}`}>
      {text}
    </h1>
  );
};

export default LiquidMorphText;

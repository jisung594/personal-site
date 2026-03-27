import React, { useState } from 'react';
import { LogoReveal } from '../LogoReveal/LogoReveal';

export const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <LogoReveal 
      logoSrc="/images/personal_logo_white.png"
      alt="Personal Logo"
      onAnimationComplete={handleAnimationComplete}
    />
  );
};

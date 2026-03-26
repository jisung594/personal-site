import React from 'react';
import styles from './Logo.module.css';

export const Logo = ({ 
  src, 
  alt, 
  className = '',
  ...props 
}) => {
  const handleLoad = (e) => {
    console.log('Logo loaded successfully:', src);
  };

  const handleError = (e) => {
    console.error('Logo failed to load:', src);
    console.error('Error details:', e);
  };

  return (
    <div className={`${styles.logo} ${className}`}>
      <img 
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

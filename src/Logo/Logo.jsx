import React from 'react';
import styles from './Logo.module.css';

export const Logo = ({ 
  src, 
  alt, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.logo} ${className}`}>
      <img 
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};

import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import './button.css';

/** Reusable button component with liquid morph animations and WCAG-compliant design system */
export const Button = ({
  primary = false,
  size = 'medium',
  href,
  children,
  isActive = false,
  delay = 0,
  clean = false,
  download = false,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimated.current && !clean) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        hasAnimated.current = true;
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isActive, delay, clean]);

  const mode = primary ? 'site-button--primary' : 'site-button--secondary';
  const cleanMode = clean ? 'site-button--clean' : '';
  
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={['site-button', `site-button--${size}`, mode, cleanMode, !clean && isAnimating ? 'morphed' : ''].join(' ')}
      {...props}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  delay: PropTypes.number,
  clean: PropTypes.bool,
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  target: PropTypes.string,
  rel: PropTypes.string,
};

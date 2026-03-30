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
      className={['site-button', `site-button--${size}`, mode, cleanMode, !clean && isAnimating ? 'morphed' : ''].join(' ')}
      {...props}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** Button size variant */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  children: PropTypes.node.isRequired,
  /** Navigation destination */
  href: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
  /** Whether button should start liquid morph animation */
  isActive: PropTypes.bool,
  /** Animation delay in milliseconds */
  delay: PropTypes.number,
  /** Whether to disable liquid morph animation for clean UI */
  clean: PropTypes.bool,
};

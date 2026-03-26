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
  ...props
}) => {
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

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  
  return (
    <a
      href={href}
      className={['storybook-button', `storybook-button--${size}`, mode, isAnimating ? 'morphed' : ''].join(' ')}
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
};

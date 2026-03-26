import PropTypes from 'prop-types';
import './button.css';

/** Reusable button component with liquid morph animations and WCAG-compliant design system */
export const Button = ({
  primary = false,
  size = 'medium',
  href,
  children,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  
  return (
    <a
      href={href}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
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
};

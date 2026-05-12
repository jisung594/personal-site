import PropTypes from 'prop-types';
import styles from './MyButton.module.css';
import { Link } from 'react-router-dom';

/** Primary UI component for button */
export const MyButton = ({
  primary = false,
  size = 'medium',
  label,
  className,
  href,
  disabled = false,
  ...props
}) => {
  const mode = primary ? styles.primary : styles.secondary;

  const ButtonElement = (
  <button
    type="button"
    className={[styles.button, styles[size], mode, className, disabled ? styles.disabled : ''].join(' ')}
    disabled={disabled}
    {...props}
  >
    {label}
  </button>
);

  // If href is provided, wrap in appropriate element for navigation
  if (href) {
    // Check if href is external URL
    const isExternal = href.startsWith('http') || href.startsWith('//');
    
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.linkWrapper}>
          {ButtonElement}
        </a>
      );
    } else {
      return (
        <Link to={href}>
          {ButtonElement}
        </Link>
      );
    }
  }

  return ButtonElement;
}

MyButton.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

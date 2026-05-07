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

  // If href is provided, wrap in Link for navigation
  if (href) {
    return (
      <Link to={href}>
        {ButtonElement}
      </Link>
    );
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

MyButton.defaultProps = {
  primary: false,
  size: 'medium',
  label: 'BUTTON',
  onClick: undefined,
  disabled: false,
};

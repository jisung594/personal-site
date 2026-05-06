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
  ...props
}) => {
  const mode = primary ? styles.primary : styles.secondary;

  const ButtonElement = (
  <button
    type="button"
    className={[styles.button, styles[size], mode, className].join(' ')}
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
};

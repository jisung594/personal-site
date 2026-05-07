import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyInput.module.css';

/**
 * Primary UI component for user input.
 */
export const MyInput = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  id,
  error = false,
  disabled = false,
  ...props
}) => {
  const inputId = id || `my-input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.inputField} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MyCombobox.module.css';

/**
 * Primary UI component for a Combobox.
 * Features Default, Open, Selected, Hover, and Focus states.
 */
export const MyCombobox = ({
  label,
  placeholder,
  options,
  helpText,
  initialValue,
  onSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue || '');
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1); // For keyboard navigation
  const comboboxRef = useRef(null);
  const inputRef = useRef(null);
  const optionsListRef = useRef(null);

  // Closes dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedOptionIndex(-1); // Reset focused option
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Updates input value when initialValue changes (for controlled component usage)
  useEffect(() => {
    if (initialValue !== undefined) {
      setSelectedValue(initialValue);
    }
  }, [initialValue]);

  // Scrolls to focused option
  useEffect(() => {
    if (isOpen && focusedOptionIndex !== -1 && optionsListRef.current) {
      const focusedElement = optionsListRef.current.children[focusedOptionIndex];
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, focusedOptionIndex]);


  const handleToggleDropdown = () => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;
      if (newIsOpen) {
        setFocusedOptionIndex(options.findIndex(option => option.label === selectedValue));
      } else {
        setFocusedOptionIndex(-1);
      }
      return newIsOpen;
    });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOptionClick = (optionLabel) => {
    setSelectedValue(optionLabel);
    setIsOpen(false);
    if (onSelect) {
      onSelect(optionLabel);
    }
    if (inputRef.current) {
      inputRef.current.focus(); // Keeps focus on input after selection
    }
  };

  const handleClearSelection = (event) => {
    event.stopPropagation(); // Prevents dropdown from opening/closing
    setSelectedValue('');
    if (onSelect) {
      onSelect(''); // Notifies parent that selection is cleared
    }
    if (inputRef.current) {
      inputRef.current.focus(); // Keeps focus on input after clearing
    }
  };

  const handleKeyDown = (event) => {
    if (isOpen) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault(); // Prevents page scroll
          setFocusedOptionIndex((prevIndex) =>
            (prevIndex === options.length - 1 ? 0 : prevIndex + 1)
          );
          break;
        case 'ArrowUp':
          event.preventDefault(); // Prevents page scroll
          setFocusedOptionIndex((prevIndex) =>
            (prevIndex === 0 ? options.length - 1 : prevIndex - 1)
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedOptionIndex !== -1) {
            handleOptionClick(options[focusedOptionIndex].label);
          } else if (selectedValue) {
            // If nothing is focused but something is selected, closes on Enter
            setIsOpen(false);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setIsOpen(false);
          setFocusedOptionIndex(-1);
          if (inputRef.current) {
            inputRef.current.focus();
          }
          break;
        default:
          break;
      }
    } else {
      // If closed, opens on ArrowDown or Enter
      if (event.key === 'ArrowDown' || event.key === 'Enter') {
        event.preventDefault();
        setIsOpen(true);
        setFocusedOptionIndex(options.findIndex(option => option.label === selectedValue));
      }
    }
  };
  
  // Classes for input, based on selected state
  const inputClasses = `${styles.comboboxInput} ${selectedValue ? styles.comboboxInputSelected : ''}`;

  return (
    <div className={styles.comboboxWrapper} ref={comboboxRef} {...props}>
      {label && (
        <label htmlFor="combobox-input" className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <input
          id="combobox-input"
          type="text"
          className={inputClasses}
          value={selectedValue ? selectedValue : ''}
          placeholder={selectedValue ? '' : placeholder}
          readOnly
          onClick={handleToggleDropdown}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="combobox-options"
          autoComplete="off"
        />
        {selectedValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClearSelection}
            aria-label="Clear selection"
          >
            x
          </button>
        )}
        <button
          type="button"
          className={`${styles.dropdownButton} ${isOpen ? styles.dropdownButtonOpen : ''}`}
          onClick={handleToggleDropdown}
          aria-label="Toggle dropdown"
        >
          <span className={styles.dropdownArrow}>&#9660;</span>
        </button>
      </div>

      {/* Conditional rendering for helpText: only show if not open */}
      {helpText && !isOpen && <div className={styles.helpText}>{helpText}</div>}

      {isOpen && (
        <ul className={styles.dropdownList} role="listbox" id="combobox-options" ref={optionsListRef}>
          {options.map((option, index) => (
            <li
              key={option.value || option.label || index}
              className={`${styles.dropdownOption} ${focusedOptionIndex === index ? styles.dropdownOptionFocused : ''}`}
              onClick={() => handleOptionClick(option.label)}
              role="option"
              aria-selected={selectedValue === option.label}
              tabIndex={-1} // Makes options focusable but not part of tab flow
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MyCombobox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  helpText: PropTypes.string,
  initialValue: PropTypes.string,
  onSelect: PropTypes.func,
};

MyCombobox.defaultProps = {
  placeholder: 'Select an option',
  helpText: '',
  initialValue: '',
  onSelect: undefined,
};

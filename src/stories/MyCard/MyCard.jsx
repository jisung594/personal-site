import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MyCard.module.css';
import { MyButton } from '../MyButton/MyButton';

/**
 * Primary UI component for a Card.
 * Supports Vertical (expandable) and Horizontal layouts.
 */
export const MyCard = ({
  primary = false,
  variant = 'vertical', // 'vertical' or 'horizontal'
  title,
  secondaryText,
  bodyText,
  imageUrl,
  imageAlt,
  ctaButtons,
  isInitiallyOpen = false, // Only applies to vertical variant
  disabled = false,
  onClick,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const handleToggleOpen = () => {
    if (variant === 'vertical') {
      setIsOpen(!isOpen);
    }
  };

  const cardClasses = [
    styles.myCard,
    styles[`myCard--${variant}`],
    disabled ? styles.disabled : '',
    isOpen ? styles.myCardOpen : ''
  ].join(' ');

  const renderImage = () => (
    imageUrl && (
      <div className={styles.cardImageContainer}>
        <img src={imageUrl} alt={imageAlt} className={styles.cardImage} onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/200x150/EBEBEB/4D4D4D?text=No+Image`; // Placeholder on error
        }} />
      </div>
    )
  );

  const renderContent = () => (
    <div className={styles.cardContent}>
      <div className={styles.cardHeader} onClick={variant === 'vertical' ? handleToggleOpen : undefined} tabIndex={variant === 'vertical' ? 0 : -1}>
          <div className={styles.cardTitleAndSecondaryText}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.secondaryText}>{secondaryText}</p>
          </div>
        {variant === 'vertical' && (
          <span className={`${styles.dropdownArrow} ${isOpen ? styles.dropdownArrowOpen : ''}`}>
            &#9660;
          </span>
        )}
      </div>
      {/* Expanded content for vertical variant */}
      {isOpen && (
        <div className={styles.cardBody}>
          {bodyText && <p className={styles.bodyText}>{bodyText}</p>}
          {ctaButtons && ctaButtons.length > 0 && (
            <div className={styles.ctaButtonContainer}>
              {ctaButtons.map((button, index) => (
                <MyButton
                  key={index}
                  label={button.label}
                  onClick={button.onClick}
                  primary={button.primary}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {renderImage()}
      {renderContent()}
    </div>
  );
};

MyCard.propTypes = {
  variant: PropTypes.oneOf(['vertical', 'horizontal']),
  title: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  bodyText: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  ctaButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
  isInitiallyOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

MyCard.defaultProps = {
  variant: 'vertical',
  secondaryText: '',
  bodyText: '',
  imageUrl: '',
  imageAlt: 'Card image',
  ctaButtons: [],
  isInitiallyOpen: false,
  disabled: false,
  onClick: undefined,
};

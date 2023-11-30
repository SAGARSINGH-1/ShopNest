import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; // Import your styles or define styles within the component

const Button = ({ label, onClick, variant }) => {
  const buttonClass = `button ${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent']),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;

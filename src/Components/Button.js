import React from 'react';
import "../Styles/Button.css";

const Button = ({ onClick, mode, label }) => {
  const buttonClass = mode === 'dark' ? 'dark' : 'light';

  return (
    <button className={`button-common ${buttonClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
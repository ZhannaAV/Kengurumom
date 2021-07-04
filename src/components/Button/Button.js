import React from 'react';
import './Button.css';

function Button(props) {
  const {
    type, text, btnStyle, onClick,
  } = props;

  const handleClick = () => {
    if (typeof onClick === 'function') onClick();
  };

  return (<button className={`button ${btnStyle}`} type={type} onClick={handleClick}>{text}</button>);
}

export default Button;

import React from "react";
import './Button.css'

function Button(props) {
  const {type, text, style, onClick} = props;

  const handleClick = () => {
    if (typeof onClick === "function") onClick()
  }

  return (<button className={`button ${style}`} type={type} onClick={handleClick}>{text}</button>)
}

export default Button
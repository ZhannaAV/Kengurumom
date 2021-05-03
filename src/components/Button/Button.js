import React from "react";
import {Link} from 'react-router-dom';
import './Button.css'

function Button(props) {
  const {type, text} = props;
  const btnType = props.btnType || "button";
  const btnStyle = props.btnStyle || "filled";

  let btnStyleClass = '';
  if (btnStyle === 'outlined') btnStyleClass = 'button_outlined';

  const handleClick = () => {
    if (typeof props.onClick === "function") {
      props.onClick();
    }
  }

  if (btnType === 'link' && !props.linkTo) {
    throw Error("Component [Button]: button type is Link so 'linkTo' should be set!");
  }

  return (
    <>
      {
        btnType === "button" &&
        <button className={`button ${btnStyleClass} ${type}`} type="button" onClick={handleClick}>{text}</button>
      }
      {
        btnType === "link" &&
        <Link to={props.linkTo} className={`button ${btnStyleClass} ${type}`} onClick={handleClick}>{text}</Link>
      }
    </>
  )
}

export default Button
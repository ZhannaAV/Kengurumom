import React from "react";
import './Button.css'

function Button(props){
    const {type, text} = props;
    return (
        <button className={`button ${type}`} type="button">{text}</button>
    )
}

export default Button
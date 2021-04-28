import React from 'react';
import linkLeft from '../../../images/slick-slider-btn-left.svg';
import linkRight from '../../../images/slick-slider-btn-right.svg';

import './SlickSliderArrow.css';

export default function SlickSliderArrow(props){
  let link = '';
  let className = '';
  if (props.left) {
    link = linkLeft;
    className = 'slickSliderArrow_left';
  }
  if (props.right) {
    link = linkRight;
    className = 'slickSliderArrow_right';
  }

  return (
    <button className={`slickSliderArrow ${className}`}>
      <img src={link} className="slickSliderArrow__img"/>
    </button>
  )
}
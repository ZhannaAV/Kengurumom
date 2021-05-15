import React from 'react';
import linkLeft from '../../../images/slick-slider-btn-left.svg';
import linkRight from '../../../images/slick-slider-btn-right.svg';

import './SlickSliderArrow.css';

export default function SlickSliderArrow({left = false, right = false, onClick}){
  let link = '';
  let className = '';
  if (left) {
    link = linkLeft;
    className = 'slickSliderArrow_left';
  }
  if (right) {
    link = linkRight;
    className = 'slickSliderArrow_right';
  }

  return (
    <button className={`slickSliderArrow ${className}`} onClick={onClick}>
      <img src={link} className="slickSliderArrow__img"/>
    </button>
  )
}
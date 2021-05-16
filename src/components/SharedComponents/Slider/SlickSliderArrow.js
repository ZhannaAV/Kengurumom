import React from 'react';
import linkLeft from '../../../images/slick-slider-btn-left.svg';
import linkRight from '../../../images/slick-slider-btn-right.svg';
import linkLeftAngle from '../../../images/slick-slider-btn-left-angle.svg';
import linkRightAngle from '../../../images/slick-slider-btn-right-angle.svg';

import './SlickSliderArrow.css';

export default function SlickSliderArrow({left = false, right = false, type, onClick}){
  let link = '';
  let className = '';

  if (left) {
    if (type === 'popular') {
      link = linkLeft
    }
    else if (type === 'review') {
      link = linkLeftAngle
    }
    className = 'slick-slider-arrow_left';
  }
  if (right) {
    if (type === 'popular') {
      link = linkRight;
    }
    else if (type === 'review') {
      link = linkRightAngle;
    }
    className = 'slick-slider-arrow_right';
  }

  return (
    <button className={`slick-slider-arrow slick-slider-arrow_type_${type} ${className}`} onClick={onClick}>
      <img src={link} className="slick-slider-arrow__img" alt="Показать ещё"/>
    </button>
  )
}
import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlickSliderArrow from './SlickSliderArrow';
import './SlickSlider.css';

export default function SlickSlider(props) {
  const slider = useRef(null);

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: props.slides ? props.slides : 3,
    slidesToScroll: props.slides ? props.slides : 3,
    arrows: props.showArrows,
    // centerMode: true,
    nextArrow: <SlickSliderArrow right={true} type={props.arrowType} onClick={slider.slickNext}/>,
    prevArrow: <SlickSliderArrow left={true} type={props.arrowType} onClick={slider.slickPrev}/>,
  };

  return (
    <Slider ref={slider} {...settings} className={props.className}>
      {props.children}
    </Slider>
  );
}

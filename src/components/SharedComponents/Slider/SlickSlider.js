import './SlickSlider.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSliderArrow from './SlickSliderArrow';

export default function SlickSlider(props){  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.slides ? props.slides : 3,
    slidesToScroll: props.slides ? props.slides : 3,
    // arrows: false,
    arrows: true,
    // centerMode: true,
    nextArrow: <SlickSliderArrow right={true} />,
    prevArrow: <SlickSliderArrow left={true} />
  };

  return (
    <Slider {...settings} className={props.className}>
      {props.children}
    </Slider>
  );  
}
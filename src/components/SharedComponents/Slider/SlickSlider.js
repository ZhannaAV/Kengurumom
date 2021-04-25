import './SlickSlider.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider(props){  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.slides ? props.slides : 3,
    slidesToScroll: props.slides ? props.slides : 3,
    arrows: false,
    // centerMode: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings} className={props.className}>
      {props.children}
    </Slider>
  );  
}
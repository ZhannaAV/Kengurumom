import './Slider.css';
import { useState } from 'react';
import slider1 from '../../images/slider/photo-on-slider-1.jpg';
import slider2 from '../../images/slider/photo-on-slider-2.jpg';
import Button from '../Button/Button';

function Slider() {
  const [isSecondSlideVisible, setIsSecondSlideVisible] = useState(false);

  return (
    <section className="slider">
      {/* <div className="slider__wrapper"> */}
      <ul className={`slider__list ${isSecondSlideVisible ? 'slider__list_pos_second' : ''}`}>
        <li className="slider__slide">
          <div className="slider__cover">
            <div className="slider__contain">
              <h2 className="slider__title">
                <span className="slider__title_accent">Kenguru </span>
                комфорт  и эстетика с первых дней
              </h2>
              <p className="slider__subtitle">Качественная одежда и аксессуары
                для новорожденных и мам.
              </p>
              <p className="slider__subtitle">
                От сердца к сердцу!
              </p>
              <Button text={'Заказать'} />
            </div>
            <div className="slider__overlay">
              <img className="slider__background" src={slider1} alt="#" />
            </div>
          </div>
        </li>
        <li className="slider__slide">
          <div className="slider__cover">
            <div className="slider__contain">
              <h2 className="slider__title"><span className="slider__title_accent">Индивидуальный </span>
                пошив
              </h2>
              <p className="slider__subtitle">По Вашим размерам
                и Вашему выбору ткани
              </p>
              <Button text={'В каталог'} />
            </div>

          <div className="slider__overlay">
            <img className="slider__background" src={slider2} alt="#" />
          </div>
          </div>
        </li>
      </ul>
      <div className="slider__navigation">
        <button
          type="button"
          className={`slider__dott ${!isSecondSlideVisible ? 'slider__dott_active' : ''}`}
          enabled={!isSecondSlideVisible}
          onClick={() => setIsSecondSlideVisible(false)}
        >
        </button>
        <button
          type="button"
          className={`slider__dott ${isSecondSlideVisible ? 'slider__dott_active' : ''}`}
          enabled={isSecondSlideVisible}
          onClick={() => setIsSecondSlideVisible(true)}
        >
        </button>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Slider;

import './ZoomContainer.css';
import loopImg from '../../../../images/product/loop.svg';
import arrowImg from '../../../../images/product/product-arrow.jpg';
import { useState, useEffect } from 'react';

function ZoomContainer({ zoomImage }) {
  const [zoomParams, setZoomParams] = useState({
    backgroundPosition: '0% 0%',
    backgroundImage: `url(${zoomImage})`,
  });

  useEffect(() => {
    setZoomParams({ ...zoomParams, backgroundImage: `url(${zoomImage})` });
  }, [zoomImage]);

  const handleZoomMove = (evt) => {
    const { width, height } = evt.target.getBoundingClientRect();
    const x = (evt.nativeEvent.offsetX / width) * 100;
    const y = (evt.nativeEvent.offsetY / height) * 100;
    setZoomParams({ ...zoomParams, backgroundPosition: `${x}% ${y}%` });
  };

  return (
    <div className="zoom-container">
      <img src={loopImg} alt="Лупа" className="zoom-container__loop-icon" />
      <img src={arrowImg} alt="Предыдущая" className="zoom-container__arrow" />
      <img
        src={arrowImg}
        alt="Следующая"
        className="zoom-container__arrow zoom-container__arrow_right"
      />
      <figure
        onMouseMove={handleZoomMove}
        style={zoomParams}
        className="zoom-container__image-wrapper"
      >
        <img
          className="zoom-container__image"
          src={zoomImage}
          alt="Главное изображение"
        />
      </figure>
    </div>
  );
}

export default ZoomContainer;

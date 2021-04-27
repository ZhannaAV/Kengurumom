import './ProductMainImage.css';
import loopImg from '../../../../images/product/loop.svg';
import arrowImg from '../../../../images/product/product-arrow.jpg';
import { useEffect, useRef } from 'react';

function ProductMainImage({ onMove, zoomParams, chosenImage, item, getRef }) {
  const mainImage = useRef();

  useEffect(() => {
    getRef(mainImage.current.src);
  }, []);

  const handleZoomMove = (evt) => {
    const { width, height } = evt.target.getBoundingClientRect();
    const x = (evt.nativeEvent.offsetX / width) * 100;
    const y = (evt.nativeEvent.offsetY / height) * 100;
    onMove(x, y);
  };

  return (
    <li className="product__photo">
      <img src={loopImg} alt="Лупа" className="product__loop-icon" />
      <img src={arrowImg} alt="Предыдущая" className="product__arrow" />
      <img
        src={arrowImg}
        alt="Следующая"
        className="product__arrow product__arrow_right"
      />
      <figure className="test" onMouseMove={handleZoomMove} style={zoomParams}>
        <img
          className="product__image"
          src={chosenImage || item.link}
          alt="Главное изображение"
          ref={mainImage}
        />
      </figure>
    </li>
  );
}

export default ProductMainImage;

import './ProductGallery.css';
import loopImg from '../../images/product/loop.svg';
import arrowImg from '../../images/product/product-arrow.jpg';
import { useState, useRef } from 'react';
import photoProductMain from '../../images/product/main.jpg';

function ProductGallery({ galleryImages }) {
  const [mainImage, setMainImage] = useState(null);

  const currentImage = useRef();

  const [zoomParams, setZoomParams] = useState({
    backgroundPosition: '0% 0%',
    backgroundImage: `url(${photoProductMain})`,
  });

  const handleZoomMove = (evt) => {
    const { width, height } = evt.target.getBoundingClientRect();
    const x = (evt.nativeEvent.offsetX / width) * 100;
    const y = (evt.nativeEvent.offsetY / height) * 100;
    setZoomParams({ ...zoomParams, backgroundPosition: `${x}% ${y}%` });
  };

  const handleClick = () => {
    console.log(currentImage.current.src)
    setZoomParams({ ...zoomParams, backgroundImage: `url(${currentImage.current.src})`});
    setMainImage(currentImage.current.src);
  };

  return (
    <ul className="product__photos">
      {galleryImages.map((item, i) => {
        if (i === 0) {
          return (
            <li key={i} className="product__photo">
              <img src={loopImg} alt="Лупа" className="product__loop-icon" />
              <img src={arrowImg} alt="Предыдущая" className="product__arrow" />
              <img
                src={arrowImg}
                alt="Следующая"
                className="product__arrow product__arrow_right"
              />
              <figure
                className="test"
                onMouseMove={handleZoomMove}
                style={zoomParams}
              >
                <img
                  className="product__image"
                  src={mainImage || item.link}
                  alt="Главное изображение"
                />
              </figure>
            </li>
          );
        } else {
          return (
            <li onClick={handleClick} key={i} class="product__photo">
              <img
                class="product__image"
                src={item.link}
                alt={`Второстепенное изображение ${i}`}
                ref={currentImage}
              />
            </li>
          );
        }
      })}
    </ul>
  );
}

export default ProductGallery;

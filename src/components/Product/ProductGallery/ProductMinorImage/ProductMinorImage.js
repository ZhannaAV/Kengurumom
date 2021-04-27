import './ProductMinorImage.css';
import { useRef } from 'react';

function ProductMinorImage({ item, onClick }) {
  const currentImage = useRef();

  const transferImage = () => {
    onClick(currentImage.current.src);
  };

  return (
    <li onClick={transferImage} class="product__photo">
      <img
        class="product__image"
        src={item.link}
        alt="Второстепенное изображение"
        ref={currentImage}
      />
    </li>
  );
}

export default ProductMinorImage;

import './PopupProductGallery.css';
import { useState } from 'react';

function PopupProductGallery({ isOpened, image, closePopup }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleCloseClick = () => {
    closePopup(true);
    setIsZoomed(false);
  };

  const toggleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section
      className={`popup-product-gallery ${
        isOpened && 'popup-product-gallery_opened'
      }`}
    >
      <button
        onClick={handleCloseClick}
        type="button"
        className="popup-product-gallery__button-close"
      />
      <button
        onClick={toggleZoomClick}
        type="button"
        className="popup-product-gallery__button-zoom"
      />
      <div className={`popup-product-gallery__container ${isZoomed && 'popup-product-gallery__container_zoomed'}`}>
        <img
          src={image}
          alt="Картинка в попапе"
          className={`popup-product-gallery__image ${
            isZoomed && 'popup-product-gallery__image_zoomed'
          }`}
        />
      </div>
    </section>
  );
}

export default PopupProductGallery;

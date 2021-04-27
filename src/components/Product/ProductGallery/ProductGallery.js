import './ProductGallery.css';
import { useEffect, useState } from 'react';
import ProductMinorImage from './ProductMinorImage/ProductMinorImage';
import ProductMainImage from './ProductMainImage/ProductMainImage';

function ProductGallery({ galleryImages }) {
  const [chosenImage, setChosenImage] = useState(null);

  const getRef = (mainImage) => {
    setZoomParams({
      ...zoomParams,
      backgroundImage: `url(${mainImage})`,
    });
  };

  useEffect(() => {
    getRef();
  }, []);

  const [zoomParams, setZoomParams] = useState({
    backgroundPosition: '0% 0%',
    backgroundImage: `url(${null})`,
  });

  const handleClickOnMinorImage = (currentImage) => {
    setChosenImage(currentImage);
    setZoomParams({
      ...zoomParams,
      backgroundImage: `url(${currentImage})`,
    });
  };

  const handleMoveOnMainImage = (x, y) => {
    setZoomParams({ ...zoomParams, backgroundPosition: `${x}% ${y}%` });
  };

  return (
    <ul className="product__photos">
      {galleryImages.map((item, i) => {
        if (i === 0) {
          return (
            <ProductMainImage
              item={item}
              key={i}
              chosenImage={chosenImage}
              zoomParams={zoomParams}
              onMove={handleMoveOnMainImage}
              getRef={getRef}
            />
          );
        } else {
          return (
            <ProductMinorImage
              key={i}
              item={item}
              onClick={handleClickOnMinorImage}
            />
          );
        }
      })}
    </ul>
  );
}

export default ProductGallery;

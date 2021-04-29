import './ProdGallery.css';
import ThumbnailImage from './ThumbnailImage/ThumbnailImage';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import { useState } from 'react';

function ProdGallery({ galleryImages }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const getImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="product-gallery">
      <ZoomContainer slides={galleryImages} currentThumb={currentImageIndex} />
      <ul className="thumbnails">
        {galleryImages.map((image, i) => (
          <ThumbnailImage src={image} key={i} getImage={getImage} index={i} />
        ))}
      </ul>
    </section>
  );
}

export default ProdGallery;

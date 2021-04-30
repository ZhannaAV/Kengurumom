import './ProdGallery.css';
import ThumbnailImage from './ThumbnailImage/ThumbnailImage';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import { useState } from 'react';

function ProdGallery({ photos, media }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const getImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="product-gallery">
      <ZoomContainer slides={photos} currentThumb={currentImageIndex} media={media} />
      <ul className="thumbnails">
        {photos.map((image, i) => (
          <ThumbnailImage src={image} key={i} getImage={getImage} index={i} />
        ))}
      </ul>
    </section>
  );
}

export default ProdGallery;

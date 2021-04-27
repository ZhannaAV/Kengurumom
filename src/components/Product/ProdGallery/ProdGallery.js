import './ProdGallery.css';
import ThumbnailImage from './ThumbnailImage/ThumbnailImage';
import ZoomContainer from './ZoomContainer/ZoomContainer';
import { useState, useEffect } from 'react';

function ProdGallery({galleryImages}) {

  useEffect(() => {
    setImages(galleryImages);
  }, [])

  const [images, setImages] = useState([]);
  const [zoomImage, setZoomImage] = useState(galleryImages[0].link);

  const getImage = (src) => {
    setZoomImage(src);
  };

  return (
    <section className="product-gallery">
      <ZoomContainer zoomImage={zoomImage} />
      <ul className="thumbnails">
        {images.map((image, i) => (
          <ThumbnailImage src={image.link} key={i} getImage={getImage} />
        ))}
      </ul>
    </section>
  );
}

export default ProdGallery;

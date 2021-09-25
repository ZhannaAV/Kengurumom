import { useState, useEffect } from 'react';
import './PhotoGrid.css';
import PhotoElement from '../PhotoElement/PhotoElement';
import { instagramPhotoData } from '../../config/test-db';

function PhotoGrid() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(instagramPhotoData);
  }, []);

  return (
    <ul className="photo-grid">
      {elements.map((element, i) => (
        <PhotoElement
          link={element.link}
          key={i}
          additionalClass={i > 5 && 'photo-element_not-active'}
        />
      ))}
    </ul>
  );
}

export default PhotoGrid;

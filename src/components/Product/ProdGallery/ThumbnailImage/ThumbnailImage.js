import './ThumbnailImage.css';

function ThumbnailImage({ src, getImage, index }) {
  const handleImageClick = () => {
    getImage(index);
  };

  return (
    <li className="thumbnail">
      <img
        onClick={handleImageClick}
        className="thumbnail__image"
        src={src}
        alt="Второстепенное изображение"
      />
    </li>
  );
}

export default ThumbnailImage;

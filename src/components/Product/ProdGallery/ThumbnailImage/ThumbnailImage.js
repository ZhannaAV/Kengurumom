import './ThumbnailImage.css';

function ThumbnailImage({src, getImage}) {

  const handleImageClick = (evt) => {
    getImage(evt.target.src);
  }

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

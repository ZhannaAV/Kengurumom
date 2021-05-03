import './ThumbnailImage.css';

function ThumbnailImage({ src, getImage, index }) {
  const handleImageClick = () => {
    getImage(index);
  };

  return (
    <li className="thumbnail">
      <figure
        className="thumbnail__image"
        onClick={handleImageClick}
        style={{ backgroundImage: `url(${src})` }}
      />
    </li>
  );
}

export default ThumbnailImage;

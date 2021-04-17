import "./PhotoElement.css";
import instCornerIcon from "../../images/instagram/inst-corner-icon.svg";

function PhotoElement({ link, additionalClass }) {
  return (
    <li className={`photo-grid__element ${additionalClass}`}>
      <a target="_blank" href="#" className="photo-grid__link">
        <img
          src={instCornerIcon}
          alt="Иконка instagram"
          className="photo-grid__icon"
        />
        <img
          alt={`Фотография: ${link}`}
          src={link}
          className="photo-grid__image"
        />
      </a>
    </li>
  );
}

export default PhotoElement;

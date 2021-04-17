import "./AdvantageElement.css";

function AdvantageElement({ image, alt, title, description }) {
  return (
    <li className="advantages__card-element">
      <img className="advantages__card-image" src={image} alt={alt} />
      <h2 className="advantages__card-title">{title}</h2>
      <p className="advantages__card-description">{description}</p>
    </li>
  );
}

export default AdvantageElement;
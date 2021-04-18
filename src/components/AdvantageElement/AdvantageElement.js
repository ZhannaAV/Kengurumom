import './AdvantageElement.css';

function AdvantageElement({ image, alt, title, description }) {
  return (
    <li className="advantage-element">
      <img className="advantage-element__image" src={image} alt={alt} />
      <h2 className="advantage-element__title">{title}</h2>
      <p className="advantage-element__description">{description}</p>
    </li>
  );
}

export default AdvantageElement;

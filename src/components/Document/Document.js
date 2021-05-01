import {
  DOCUMENT_OFFER_TITLE,
  DOCUMENT_TERMS_OF_USE_TITLE,
  DOCUMENT_OFFER_CONTENT,
  DOCUMENT_TERMS_OF_USE_CONTENT,
} from "../../config/texts";
import "./Document.css";

export default function Document(props) {
  return (
    <div className="document__container">
      <h2 className="document__title">
        {props.type === "offer" && DOCUMENT_OFFER_TITLE}
        {props.type === "terms-of-use" && DOCUMENT_TERMS_OF_USE_TITLE}
      </h2>
      <div className="document__content">
        {props.type === "offer" && DOCUMENT_OFFER_CONTENT}
        {props.type === "terms-of-use" && (
          <ul className="document__items">
            {DOCUMENT_TERMS_OF_USE_CONTENT.map((mainItem) => (
              <li className="document__item">
                <span className="document__subtitle">{mainItem.title}</span>
                {mainItem.titleText && <p className="document__subtitle-text">{mainItem.titleText}</p>}
                <ul className="document__paragraph">
                  {mainItem.texts.map((textItem) => (
                    <li> {textItem}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

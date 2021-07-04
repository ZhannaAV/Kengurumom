import {
  DOCUMENT_OFFER_CONTENT,
  DOCUMENT_TERMS_OF_USE_CONTENT,
} from './texts';
import './DocumentPage.css';

export default function DocumentPage({ type }) {
  return (
    <div className="document__container">
      <h2 className="document__title">
        {type === 'offer' && 'Оферта'}
        {type === 'terms-of-use' && 'Политика в отношении обработки персональных данных'}
      </h2>
      <div className="document__content">
        {type === 'offer' && DOCUMENT_OFFER_CONTENT}
        {type === 'terms-of-use' && (
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

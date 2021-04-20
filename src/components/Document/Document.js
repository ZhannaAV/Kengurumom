import { DOCUMENT_OFFER_TITLE, DOCUMENT_TERMS_OF_USE_TITLE, DOCUMENT_OFFER_CONTENT, DOCUMENT_TERMS_OF_USE_CONTENT } from '../../config/texts';
import './Document.css';

export default function Document(props) {
  return (
    <div className="document__container">
      <h2 className="document__title">
        {props.type === 'offer' && DOCUMENT_OFFER_TITLE}
        {props.type === 'terms-of-use' && DOCUMENT_TERMS_OF_USE_TITLE}
      </h2>
      <p className="document__text">
        {props.type === 'offer' && DOCUMENT_OFFER_CONTENT}
        {props.type === 'terms-of-use' && DOCUMENT_TERMS_OF_USE_CONTENT}
      </p>
    </div>
  )
}
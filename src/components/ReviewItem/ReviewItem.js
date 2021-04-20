import './ReviewItem.css';

export default function ReviewItem(props){
  return (
    <figure className="review__item">
      <img src={props.instaSrc} alt={props.instaTitle} className="review__item-img"/>
      <figcaption className="review__item-title"><a href={props.instaLink} className="review__item-insta">@{props.instaTitle}</a></figcaption>
      <p className="review__item-text">{props.reviewShort}</p>
      <a href="" className="review__item-text-full">Читать полностью</a>
    </figure>
  );
}
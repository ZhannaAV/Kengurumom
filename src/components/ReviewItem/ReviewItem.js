import './ReviewItem.css';

export default function ReviewItem(props){
  return (
    <figure className="review__item">
      <img src={props.item.instaSrc} alt={props.item.instaTitle} className="review__item-img"/>
      <figcaption className="review__item-title"><a href={props.item.instaLink} className="review__item-insta">@{props.item.instaTitle}</a></figcaption>
      <p className="review__item-text">{props.item.reviewShort}</p>
      <a href="" className="review__item-text-full">Читать полностью</a>
    </figure>
  );
}
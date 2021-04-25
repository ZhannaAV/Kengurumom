import './PopularItem.css';

export default function PopularItem(props){
  return (
    <figure className={`popular__item ${props.new && 'popular__item_new'}`}>
      <img src={props.src} alt={props.title} className="popular__item-img"/>
      <button className="popular__item-cart" alt="В корзину"></button>
      <figcaption className="popular__item-title">{props.title}</figcaption>
      <div className="popular__item-price">{props.price}
        {props.priceSale && <p className="popular__item-price-sale">{props.priceSale}</p>}
      </div>
    </figure>
  );
}
import './PopularItem.css';

export default function PopularItem(props){
  return (
    <figure className={`popular__item ${props.item.new && 'popular__item_new'}`}>
      <img src={props.item.src} alt={props.item.title} className="popular__item-img"/>
      <button className="popular__item-cart" alt="В корзину"></button>
      <figcaption className="popular__item-title">{props.item.title}</figcaption>
      <div className="popular__item-price">{props.item.price}
        {props.item.priceSale && <p className="popular__item-price-sale">{props.item.priceSale}</p>}
      </div>
    </figure>
  );
}
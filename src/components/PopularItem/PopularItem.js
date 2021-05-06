import './PopularItem.css';
import { CATALOGUE_PAGE } from '../../config/links';
import { Link, useHistory } from 'react-router-dom';

// export default function PopularItem(props){
//   return (
//     <figure className={`popular__item ${props.new && 'popular__item_new'}`}>
//       <img src={props.src} alt={props.title} className="popular__item-img"/>
//       <button className="popular__item-cart" alt="В корзину"></button>
//       <figcaption className="popular__item-title">{props.title}</figcaption>
//       <div className="popular__item-price">{props.price}
//         {props.priceSale && <p className="popular__item-price-sale">{props.priceSale}</p>}
//       </div>
//     </figure>
//   );
// }

export default function PopularItem(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`product/${props.id}`);
  };

  return (
    <figure className={`popular__item ${props.new && 'popular__item_new'}`}>
      <img
        onClick={handleClick}
        src={props.photos[0]}
        alt={props.name}
        className="popular__item-img"
      />
      <button className="popular__item-cart" alt="В корзину"></button>
      {/* <figcaption className="popular__item-title">{props.name}</figcaption> */}
      <Link className="popular__item-title" to={`product/${props.id}`}>
        {props.name}
      </Link>
      <div className="popular__item-price">
        {props.sale
          ? Math.floor(props.price - (props.price * props.sale) / 100)
          : props.price}
        {props.sale && (
          <p className="popular__item-price-sale">{props.price}</p>
        )}
      </div>
    </figure>
  );
}

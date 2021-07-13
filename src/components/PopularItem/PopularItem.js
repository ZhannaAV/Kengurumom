import './PopularItem.css';
import { Link, useHistory } from 'react-router-dom';
import { PRODUCT_PAGE } from '../../config/links';

// 'new' prop is reserved, rename to isNew
export default function PopularItem({
  id,
  photos,
  name,
  price,
  sale = false,
  new: isNew = false,
  onPopupAddCartOpen,
  component,
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${PRODUCT_PAGE}/${id}`);
  };

  const handlePopupAddCartOpen = () => {
    onPopupAddCartOpen({
      id,
      src: photos[0],
      title: name,
      num: 1,
      price: sale ? Math.floor(price - (price * sale) / 100) : price,
    });
  };

  return (
    <figure
      className={`${component}__item ${isNew && `${component}__item_new`}`}
    >
      <img
        onClick={handleClick}
        src={photos[0]}
        alt={name}
        className={`${component}__item-img`}
      />
      <button
        className={`${component}__item-cart`}
        alt="В корзину"
        onClick={handlePopupAddCartOpen}
      ></button>
      {/* <figcaption className="popular__item-title">{name}</figcaption> */}
      <Link className={`${component}__item-title`} to={`${PRODUCT_PAGE}/${id}`}>
        {name}
      </Link>
      <div className={`${component}__item-price`}>
        {sale ? Math.floor(price - (price * sale) / 100) : price}
        {sale && <p className={`${component}__item-price-sale`}>{price}</p>}
      </div>
    </figure>
  );
}

import React from 'react';
import './PopupBasket.css';
import {BASKET_PAGE} from '../../config/links';
import Button from '../Button/Button';
import {deleteIcon} from './constants';
import { Link } from 'react-router-dom';
import {itemsCart} from './test_items';

export default function PopupBasket({isOpened, inputItems, onClose}) {
  const [summaryPrice, setSummaryPrice] = React.useState(0);
  const [items, setItems] = React.useState(inputItems || []);
  const visibilityClass = isOpened ? 'popup-basket_visible' : '';

  const handleReloadCartSum = () => {
    if (items) {
      const sum = items.reduce((sum, e) => sum += e.price*e.num, 0);
      setSummaryPrice(sum)
    }
  }

  const handleDelete = item => {
    setItems(items.filter(e => {return e.title !== item.title}))
  }

  React.useEffect(() => {
    if (items.length === 0) setItems(itemsCart.filter(e => e.num)); // for test
    handleReloadCartSum();
    //return setItems([])
  }, [items]);

  return (
    <div className={`popup-basket ${visibilityClass}`}>
      <div className="popup-basket__content">
        <div className="popup-basket__items">
          {
            items ?
              items.map((item, i) => (
                <div className="popup-basket__item" key={i}>
                  <img className="popup-basket__item-img" src={item.src} alt={item.title} />
                  <h3 className="popup-basket__item-title">{item.title}</h3>
                  <p className="popup-basket__item-num">{item.num}</p>
                  <p className="popup-basket__item-price">{item.price}</p>
                  <button className="popup-basket__item-del" onClick={() => {handleDelete(item)}}>
                    <img src={deleteIcon} alt={`Удалить из корзины ${item.title}`}/>
                  </button>
                  </div>
              )) :
              <>В корзине нет товаров</>
          }
        </div>
        <p className="popup-basket__summary">
          Итого: {summaryPrice}
        </p>
        <div className="popup-basket__buttons">
          <Link to={BASKET_PAGE}>
          <Button text="В корзину" type="button" style="button_type_popup-basket" onClick={onClose}/>
          </Link>
          <Button text="Оформить" type="button" style="button_type_popup-basket" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
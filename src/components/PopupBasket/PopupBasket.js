import React from 'react';
import './PopupBasket.css';
import {POPUP_CART_ARRANGE, POPUP_CART_CART} from './texts';
import Button from '../Button/Button';
import {deleteIcon} from './constants';

import {itemsCart} from './test_items';

export default function PopupBasket(props) {
  const [summaryPrice, setSummaryPrice] = React.useState(0);
  const [items, setItems] = React.useState(props.items || []);
  const visibilityClass = props.isOpened ? 'popup-basket_visible' : '';

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
    if (items.length === 0) setItems(itemsCart); // for test
    handleReloadCartSum();
  }, [items]);

  return (
    <div className={`popup-basket ${visibilityClass}`}>
      <div className="popup-basket__content">
        <div className="popup-basket__items">
          {
            items ?
              items.map((item, i) => (
                item.num ?
                <div className="popup-basket__item" key={i}>
                  <img className="popup-basket__item-img" src={item.src} alt={item.title} />
                  <div className="popup-basket__item-text">
                    <h3 className="popup-basket__item-title">{item.title}</h3>
                    <p className="popup-basket__item-num">{item.num}</p>
                    <div className="popup-basket__item-price-del">
                      <p className="popup-basket__item-price">{item.price}</p>
                      <button className="popup-basket__item-del" onClick={() => {handleDelete(item)}}>
                        <img src={deleteIcon} alt={`Удалить из корзины ${item.title}`}/>
                      </button>
                    </div>
                  </div>
                </div> : <></>
              )) :
              <>В корзине нет товаров</>
          }
        </div>
        <p className="popup-basket__summary">
          Итого: {summaryPrice}
        </p>
        <div className="popup-basket__buttons">
          <Button btnType="link" linkTo="/cart" type="popup-basket__button" text={POPUP_CART_CART} onClick={props.onClose}/>
          <Button text={POPUP_CART_ARRANGE}  type="popup-basket__button" onClick={props.onClose} />
        </div>
      </div>
    </div>
  );
}
import {useState} from 'react';
import PopupBasket from '../PopupBasket/PopupBasket';
import './Basket.css';

function Basket({cartItems}) {
  const [isPopupBasketOpened, setIsPopupBasketOpened] = useState(false);

  const handlePopupBasketOpen = () => { setIsPopupBasketOpened(true) };
  const handlePopupBasketClose = () => { setIsPopupBasketOpened(false) };

  return (
    <div className="basket">
        <PopupBasket isOpened={isPopupBasketOpened} cartItems={cartItems} onClose={handlePopupBasketClose} />
        <div className="basket__icon" onClick={handlePopupBasketOpen}></div>
        <div className="basket__count">{cartItems ? cartItems.length : 0}</div>
    </div>
  );
}

export default Basket;
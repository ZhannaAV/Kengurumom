import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PopupBasket from '../PopupBasket/PopupBasket';
import './Basket.css';

function Basket({ cartItems, onDeleteCartItem }) {
  const [isPopupBasketOpened, setIsPopupBasketOpened] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsPopupBasketOpened(false);
  }, [location]);

  const handlePopupBasketToggle = () => {
    setIsPopupBasketOpened(!isPopupBasketOpened);
  };
  const handlePopupBasketClose = () => {
    setIsPopupBasketOpened(false);
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((sum, e) => sum + e.num, 0);
  }

  return (
    <div className='basket'>
      <PopupBasket
        isOpened={isPopupBasketOpened}
        cartItems={cartItems}
        onDeleteCartItem={onDeleteCartItem}
        onClose={handlePopupBasketClose}
      />
      <div className='basket__icon' onClick={handlePopupBasketToggle}></div>
      {cartItems && cartItems.length > 0 && (
        <div className='basket__count'>{getTotalCartItems()}</div>
      )}
    </div>
  );
}

export default Basket;

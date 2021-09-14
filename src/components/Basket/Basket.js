import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PopupBasket from '../PopupBasket/PopupBasket';
import './Basket.css';

const Basket = ({ goodsCounter }) => {
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

  return (
    <div className='basket'>
      <PopupBasket isOpened={isPopupBasketOpened} onClose={handlePopupBasketClose} />
      <div className='basket__icon' onClick={handlePopupBasketToggle} />
      {goodsCounter !== 0 && <div className='basket__count'>{goodsCounter}</div>}
    </div>
  );
};

const MapStateToProps = state => ({
  goodsCounter: state.goods.goodsCounterInBasket,
});

export default connect(MapStateToProps)(Basket);

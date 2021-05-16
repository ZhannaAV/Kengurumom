import {useState, useEffect} from 'react';
import './PopupAddCart.css';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {BASKET_PAGE} from '../../config/links';
import Button from '../Button/Button';

//change main color
const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(81, 54, 41, 0.7)'
      }
    }
  }
});

export default function PopupAddCart({isOpened, inputItem, onClose}){
  const [item, setItem] = useState(inputItem || null)

  useEffect(() => {
    setItem(inputItem)
  }, [inputItem]);

  const handleClose = () => {onClose(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-add-cart'}}
        onClose={handleClose}
        aria-labelledby="popup-add-cart"
        open={isOpened || false}>
        <h2 className='popup-add-cart__title'>Товар добавлен в корзину</h2>
        <div className='popup-add-cart__item'>
          <div className="popup-add-cart__item-img-title">
            <img src={item?.src} title={item?.title} alt={item?.title} className="popup-add-cart__item-img"/>
            <p className="popup-add-cart__item-title">{item?.title}</p>
          </div>
          <p className="popup-add-cart__item-num">1 шт</p>
          <p className="popup-add-cart__item-title">{item?.price} &#8381;</p>
        </div>
        <div className='popup-add-cart__action-buttons'>
          <Button text="Продолжить покупки" type='button' style='button_outlined button_type_popup-add-card' onClick={handleClose}/>
          <Link to={BASKET_PAGE}>
            <Button text="В корзину" type='button' style='button_type_popup-add-card' onClick={handleClose}/>
          </Link>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
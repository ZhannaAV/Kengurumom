import React from 'react';
import './PopupAddCart.css';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {POPUP_ADD_CART_TITLE, POPUP_ADD_CART_KEEP_SHOPPING, POPUP_ADD_CART_GO_TO_BASKET} from '../../config/texts';
import { Link } from 'react-router-dom';

//temp config. replace it with tests
import popular_cocoon from '../../images/popular_cocoon.png';
import popular_sleepingbag from '../../images/popular_sleepingbag.png';
import popular_milksnud from '../../images/popular_milksnud.png';
import popular_avokado from '../../images/popular_avokado.png';

const items = [
  {
    new: false,
    title: "Пеленальный кокон",
    src: popular_cocoon,
    price: 890,
    priceSale: 1090
  },
  {
    new: true,
    title: "Спальник",
    src: popular_sleepingbag,
    price: 890,
    priceSale: undefined
  },
  {
    new: false,
    title: "Милкснуд",
    src: popular_milksnud,
    price: 1090,
    priceSale: undefined
  },
  {
    new: false,
    title: 'Пелёнка-кокон "Авокадо"',
    src: popular_avokado,
    price: 1200,
    priceSale: undefined
  },
];

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

export default function PopupAddCart(props){
  const [open, setOpen] = React.useState(props.isOpened || true);
  const [item, setItem] = React.useState(props.item || {})

  React.useEffect(() => {
    setItem(items[parseInt(Math.random()*5)]);
  }, []);

  const handleClose = () => {setOpen(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-add-cart'}}
        onClose={handleClose}
        aria-labelledby="popup-add-cart"
        open={open}>
        <h2 className='popup-add-cart__title'>{POPUP_ADD_CART_TITLE}</h2>
        <div className='popup-add-cart__item'>
          <div className="popup-add-cart__item-img-title">
            <img src={item.src} title={item.title} alt={item.title} className="popup-add-cart__item-img"/>
            <p className="popup-add-cart__item-title">{item.title}</p>
          </div>
          <p className="popup-add-cart__item-num">1 шт</p>
          <p className="popup-add-cart__item-title">{item.price} &#8381;</p>
        </div>
        <div className='popup-add-cart__action-buttons'>
          <button className='popup-add-cart__button popup-add-cart__button_keep-shopping' onClick={handleClose}>{POPUP_ADD_CART_KEEP_SHOPPING}</button>
          <Link to='/cart' className='popup-add-cart__button popup-add-cart__button_go-to-basket' onClick={handleClose}>{POPUP_ADD_CART_GO_TO_BASKET}</Link>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
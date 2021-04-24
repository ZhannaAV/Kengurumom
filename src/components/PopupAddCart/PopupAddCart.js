import React from 'react';
import './PopupAddCart.css';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {POPUP_ADD_CART_TITLE, POPUP_ADD_CART_KEEP_SHOPPING, POPUP_ADD_CART_GO_TO_BASKET} from '../../config/texts';
import { Link } from 'react-router-dom';

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
  const [open, setOpen] = React.useState(props.open || true);

  const handleClose = () => {setOpen(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-add-cart'}}
        onClose={handleClose}
        aria-labelledby="popup-add-cart"
        open={open}>
        <h2 className='popup-add-cart__title'>{POPUP_ADD_CART_TITLE}</h2>
        {/* <img src="" title="Закрыть окно" /> */}
        <div></div>
        <div className='popup-add-cart__action-buttons'>
          <button className='popup-add-cart__button popup-add-cart__button_keep-shopping' onClick={handleClose}>{POPUP_ADD_CART_KEEP_SHOPPING}</button>
          <Link to='/cart' className='popup-add-cart__button popup-add-cart__button_go-to-basket' onClick={handleClose}>{POPUP_ADD_CART_GO_TO_BASKET}</Link>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
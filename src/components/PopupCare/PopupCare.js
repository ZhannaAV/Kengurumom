import React from 'react';
import './PopupCare.css';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { 
  POPUP_CARE_TITLE, 
  POPUP_CARE_WASH_TITLE, 
  POPUP_CARE_WASH_TEXT, 
  POPUP_CARE_IRONING_TITLE, 
  POPUP_CARE_IRONING_TEXT,
  POPUP_CARE_DRYING_TITLE,
  POPUP_CARE_DRYING_TEXT,
  POPUP_CARE_DRYCLEANING_TITLE,
  POPUP_CARE_DRYCLEANING_TEXT,
  POPUP_CARE_WHITENING_TITLE,
  POPUP_CARE_WHITENING_TEXT} from '../../config/texts';

import {popupCareIcons, popupClose} from '../../config/constants';

//change main color
const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(81, 54, 41, 0.7)',
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#FAF1E9',
        borderRadius: '20px',
      }
    },
    MuiDialog: {
      paperWidthSm: {
        width: "100%",
        maxWidth: "1167px",
      },
      paper: {
        position: "absolute",
        top: "177px",
      },
      paperScrollPaper: {
        maxHeight: "calc(100% - 177px - 100px)",
      }
    }
  }
});

export default function PopupCare(props){
  const handleClose = () => {props.onClose(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-care'}}
        onClose={handleClose}
        aria-labelledby="popup-care"
        open={props.isOpened || false}>
        <h2 className='popup-care__title'>{POPUP_CARE_TITLE}</h2>
        <button onClick={handleClose} className="popup-care__btn-close"><img src={popupClose} alt="Закрыть" /></button>
        <ul className="popup-care__text-list">
          <li>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_WASH_TITLE}<img src={popupCareIcons.wash} alt={POPUP_CARE_WASH_TITLE} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_WASH_TEXT}</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_DRYING_TITLE}<img src={popupCareIcons.drying} alt={POPUP_CARE_DRYING_TITLE}  className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_DRYING_TEXT}</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_IRONING_TITLE}<img src={popupCareIcons.ironing} alt={POPUP_CARE_IRONING_TITLE} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_IRONING_TEXT}</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_DRYCLEANING_TITLE}<img src={popupCareIcons.drycleaning} alt={POPUP_CARE_DRYCLEANING_TITLE} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_DRYCLEANING_TEXT}</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_WHITENING_TITLE}<img src={popupCareIcons.whitening} alt={POPUP_CARE_WHITENING_TITLE} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_WHITENING_TEXT}</p>
          </li>
        </ul>
      </Dialog>
    </ThemeProvider>
  );
}
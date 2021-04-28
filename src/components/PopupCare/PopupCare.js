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

import iconWash from '../../images/care_wash.png';
import iconDrying from '../../images/care_drying.png';
import iconIroning from '../../images/care_ironing.png';
import iconDrycleanin from '../../images/care_drycleaning.png';
import iconWhitening from '../../images/care_whitening.png';
import iconClose from '../../images/popup_close.png';

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
      root: {
        // maxWidth: '1170px',
      }
    }
  }
});

export default function PopupCare(props){
  const [open, setOpen] = React.useState(props.open || false);

  const handleClose = () => {setOpen(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-care'}}
        onClose={handleClose}
        aria-labelledby="popup-care"
        open={open}>
        <h2 className='popup-care__title'>{POPUP_CARE_TITLE}</h2>
        <button onClick={handleClose} className="popup-care__btn-close"><img src={iconClose} /></button>
        <div>
          <div>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_WASH_TITLE}<img src={iconWash} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_WASH_TEXT}</p>
          </div>
          <div>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_DRYING_TITLE}<img src={iconDrying} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_DRYING_TEXT}</p>
          </div>
          <div>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_IRONING_TITLE}<img src={iconIroning} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_IRONING_TEXT}</p>
          </div>
          <div>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_DRYCLEANING_TITLE}<img src={iconDrycleanin} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_DRYCLEANING_TEXT}</p>
          </div>
          <div>
            <h3 className='popup-care__text-title'>
              {POPUP_CARE_WHITENING_TITLE}<img src={iconWhitening} className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">{POPUP_CARE_WHITENING_TEXT}</p>
          </div>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
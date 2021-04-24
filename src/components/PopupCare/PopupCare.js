import React from 'react';
import './PopupCare.css';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import StyledText from '../StyledText/StyledText';
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

//change main color
const theme = createMuiTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(81, 54, 41, 0)',
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#FAF1E9',
        borderRadius: '20px',
        // maxWidth: '1170px',
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
  const [open, setOpen] = React.useState(props.open || true);

  const handleClose = () => {setOpen(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-care'}}
        onClose={handleClose}
        aria-labelledby="popup-care"
        open={open}>
        <h2 className='popup-care__title'>{POPUP_CARE_TITLE}</h2>
        <div>
          <div>
            <StyledText text={POPUP_CARE_WASH_TITLE} styles={{default:{className: 'popup-care__text-title'}}}/>
            <StyledText text={POPUP_CARE_WASH_TEXT} styles={{default:{className: 'popup-care__text'}}}/>
          </div>
          <div>
            <StyledText text={POPUP_CARE_DRYING_TITLE} styles={{default:{className: 'popup-care__text-title'}}}/>
            <StyledText text={POPUP_CARE_DRYING_TEXT} styles={{default:{className: 'popup-care__text'}}}/>
          </div>
          <div>
            <StyledText text={POPUP_CARE_IRONING_TITLE} styles={{default:{className: 'popup-care__text-title'}}}/>
            <StyledText text={POPUP_CARE_IRONING_TEXT} styles={{default:{className: 'popup-care__text'}}}/>
          </div>
          <div>
            <StyledText text={POPUP_CARE_DRYCLEANING_TITLE} styles={{default:{className: 'popup-care__text-title'}}}/>
            <StyledText text={POPUP_CARE_DRYCLEANING_TEXT} styles={{default:{className: 'popup-care__text'}}}/>
          </div>
          <div>
            <StyledText text={POPUP_CARE_WHITENING_TITLE} styles={{default:{className: 'popup-care__text-title'}}}/>
            <StyledText text={POPUP_CARE_WHITENING_TEXT} styles={{default:{className: 'popup-care__text'}}}/>
          </div>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
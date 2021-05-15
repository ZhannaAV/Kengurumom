import React from 'react';
import './PopupCare.css';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {popupCareIcons, popupClose} from './constants';

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

export default function PopupCare({isOpened, onClose}){
  const handleClose = () => {onClose(false)};

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        classes={{paper: 'popup-care'}}
        onClose={handleClose}
        aria-labelledby="popup-care"
        open={isOpened || false}>
        <h2 className='popup-care__title'>Рекомендации по уходу</h2>
        <button onClick={handleClose} className="popup-care__btn-close"><img src={popupClose} alt="Закрыть" /></button>
        <ul className="popup-care__text-list">
          <li>
            <h3 className='popup-care__text-title'>
              Стирка<img src={popupCareIcons.wash} alt="Стирка" className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">Рекомендуемая температура стирки изделий из трикотажного хлопка - 40 градусов на малых и средних оборотах. 
            Для трикотажных хлопковых вещей рекомендуется применять мягко действующие очищающие средства: гели для деликатных тканей, порошки для детского белья. 
            Чтобы сохранить яркость цвета изделий, мы рекомендуем стирать изделия с изнанки.</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              Сушка<img src={popupCareIcons.drying} alt="Сушка" className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">Конверты и съёмные утеплители следует сушить в горизонтальном положении, в расправленном виде. Трикотажные изделия 
            достаточно развесить на сушилке в вертикальном положении. Использование сушильных машин крайне нежелательно, так как может привести к деформации изделия.</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              Глажка<img src={popupCareIcons.ironing} alt="Глажка" className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">Гладить любые наши изделия рекомендуется при температуре не более 100-110 градусов, с использованием марли. Трикотажные 
            хлопковые изделия имеют свойство усадки после стирки. Вернуть изделиям прежний вид и размер поможет не только правильная стирка, но и правильное глажение. 
            Отпаривать необходимо в щадящем режиме. Трикотажные изделия можно слегка растягивать при глажке – это вернёт их прежний вид и избавит от усадки. Ткани с 
            блёстками и другими видами напыления гладить можно только с изнаночной стороны.</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              Химчистка<img src={popupCareIcons.drycleaning} alt="Химчистка" className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">Химчистка как трикотажных, так и изделий из хлопка запрещена.</p>
          </li>
          <li>
            <h3 className='popup-care__text-title'>
              Отбеливание<img src={popupCareIcons.whitening} alt="Отбеливание" className="popup-care__text-title-img"/>
            </h3>
            <p className="popup-care__text">Моющие средства, содержащие отбеливающие вещества и хлор могут испортить ткань, поэтому их применение не рекомендуется. 
            Возможно использование пятновыводителя без хлора, но лучше всегда предварительно проверить действие выбранного средства на незаметном участке изделия.</p>
          </li>
        </ul>
      </Dialog>
    </ThemeProvider>
  );
}
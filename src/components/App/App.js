import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import './App.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Content from "../Content/Content";
import PopupCare from '../PopupCare/PopupCare';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const isDesktop = useMediaQuery({minWidth: 1440});
  const isLaptop = useMediaQuery({maxWidth: 1440});
  const isTabletHor = useMediaQuery({maxWidth: 1280});
  const isTabletVert = useMediaQuery({maxWidth: 1024});
  const isMobileHor = useMediaQuery({maxWidth: 768});
  const isMobileVert = useMediaQuery({maxWidth: 480});

  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  const media = {
    isDesktop,
    isLaptop,
    isTabletHor,
    isTabletVert,
    isMobileHor,
    isMobileVert,
  };

  const openSideMenu = (_) => setIsSideMenuOpened(true);
  const closeSideMenu = (_) => setIsSideMenuOpened(false);

  const handleOpenPopup = () => {
    setIsPopupOpened(true);
  };

  return (
    <>
      {isLaptop && (
        <SideMenu
          media={media}
          isOpened={isSideMenuOpened}
          onCloseClick={closeSideMenu}
        />
      )}
      <Header media={media} openSideMenu={openSideMenu}/>
      <Content isOpened={handleOpenPopup} media={media}/>
      <PopupCare isOpened={isPopupOpened} onClose={setIsPopupOpened}/>
      {/* <PopupAddCart isOpened={isPopupOpened} onClose={setIsPopupOpened}/> */}
    </>
  )
}

export default App;
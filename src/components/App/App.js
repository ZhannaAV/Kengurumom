import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import './App.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Content from "../Content/Content";
import PopupCare from '../PopupCare/PopupCare';
import Footer from '../Footer/Footer';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isPopupCareOpened, setIsPopupCareOpened] = useState(false);

  const isDesktop = useMediaQuery({minWidth: 1441});
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

  const handlePopupCareOpen = () => { setIsPopupCareOpened(true) };
  const handlePopupCareClose = () => { setIsPopupCareOpened(false) };

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
      <Content 
        isOpened={handleOpenPopup} 
        media={media}
        onPopupCareOpen={handlePopupCareOpen}
      />
      <Footer media={media}/>
      <PopupCare isOpened={isPopupCareOpened} onClose={handlePopupCareClose}/>
      {/* <PopupBasket isOpened={isPopupOpened} onClose={setIsPopupOpened}/> */}
      {/* <PopupAddCart isOpened={isPopupOpened} onClose={setIsPopupOpened}/> */}
    </>
  )
}

export default App;
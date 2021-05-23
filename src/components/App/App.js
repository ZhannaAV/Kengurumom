import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import './App.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Content from "../Content/Content";
import PopupCare from '../PopupCare/PopupCare';
import PopupAddCart from '../PopupAddCart/PopupAddCart';
import Footer from '../Footer/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [popupAddCartItem, setPopupAddCartItem] = useState(null);
  const [isPopupAddCartOpened, setIsPopupAddCartOpened] = useState(false);
  const [isPopupCareOpened, setIsPopupCareOpened] = useState(false);

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

  //open popup "Рекомендация по уходу"
  const handlePopupCareOpen = () => { setIsPopupCareOpened(true) };
  const handlePopupCareClose = () => { setIsPopupCareOpened(false) };
  
  //open popup "Товар добавлен в корзину"
  const handlePopupAddCartOpen = (item) => {
    setCartItems([...cartItems, item])
    setPopupAddCartItem(item);
    setIsPopupAddCartOpened(true);
  };
  const handlePopupAddCartClose = () => { setIsPopupAddCartOpened(false) };

  return (
    <>
      {isLaptop && (
        <SideMenu
          media={media}
          isOpened={isSideMenuOpened}
          onCloseClick={closeSideMenu}
        />
      )}
      <Header media={media} openSideMenu={openSideMenu} cartItems={cartItems}/>
      <Content 
        media={media}
        onPopupCareOpen={handlePopupCareOpen}
        onPopupAddCartOpen={handlePopupAddCartOpen}
      />
      <Footer media={media}/>
      <PopupCare isOpened={isPopupCareOpened} onClose={handlePopupCareClose}/>
      <PopupAddCart isOpened={isPopupAddCartOpened} inputItem={popupAddCartItem} onClose={handlePopupAddCartClose}/>
    </>
  )
}

export default App;
import {Component, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Slider from '../Slider/Slider';
import Advantages from '../Advantages/Advantages';
import Instagram from '../Instagram/Instagram';
import './App.css';
import SectionsWithBtn from "../SectionsWithBtn/SectionsWithBtn";
<<<<<<< HEAD
<<<<<<< HEAD
import Popular from '../Popular/Popular';
import Review from '../Review/Review';
import PopupAddCart from '../PopupAddCart/PopupAddCart';
=======
>>>>>>> Feat: add main about
=======
import About from '../About/About';
>>>>>>> Fix: little style & padding fixes

function App() {
    const isDesktop = useMediaQuery({'minWidth': 1440});
    const isLaptop = useMediaQuery({'maxWidth': 1440});
    const isTabletHor = useMediaQuery({'maxWidth': 1280});
    const isTabletVert = useMediaQuery({'maxWidth': 1024});
    const isMobileHor = useMediaQuery({'maxWidth': 768});
    const isMobileVert = useMediaQuery({'maxWidth': 480});

    const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

    const media = {isDesktop, isLaptop, isTabletHor, isTabletVert, isMobileHor, isMobileVert};

    const openSideMenu = _ => setIsSideMenuOpened(true);
    const closeSideMenu = _ => setIsSideMenuOpened(false);


    return (
        <>
            {
                isLaptop
                && <SideMenu
                    media={media}
                    isOpened={isSideMenuOpened}
                    onCloseClick={closeSideMenu}
                />
            }
            <Header
                media={media}
                openSideMenu={openSideMenu}
            />

<<<<<<< HEAD
            <Slider media={media}/>
            <Popular media={media}/>
            <Advantages/>
            <SectionsWithBtn/>
            <Review media={media}/>
            <Instagram/>

            <PopupAddCart />
=======
            <Switch>
                <Route exact path='/'>
                    <Slider media={media}/>
                    <Advantages/>
                    <SectionsWithBtn/>
                    <Instagram/>
                </Route>

                <Route path='/about'>
                    <About media={media}/>
                </Route>
            </Switch>
>>>>>>> Add text from variables with StyledText
        </>
    );
}
export default App;


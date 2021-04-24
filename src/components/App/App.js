import {Component, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Switch, Route} from 'react-router-dom';
import {ABOUT_PAGE} from '../../config/links';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Slider from '../Slider/Slider';
import Advantages from '../Advantages/Advantages';
import Instagram from '../Instagram/Instagram';
import './App.css';
import SectionsWithBtn from "../SectionsWithBtn/SectionsWithBtn";
import Popular from '../Popular/Popular';
import Review from '../Review/Review';
import PopupAddCart from '../PopupAddCart/PopupAddCart';
import About from '../About/About';
import PopupCare from '../PopupCare/PopupCare';

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

            <Switch>
                <Route exact path="/">
                    <Slider media={media}/>
                    <Popular media={media}/>
                    <Advantages/>
                    <SectionsWithBtn/>
                    <Review media={media}/>
                    <Instagram/>
                </Route>

                <Route path={ABOUT_PAGE}>
                    <About />
                </Route>
            </Switch>

            <PopupCare isOpened={true}>
            {/* <PopupAddCart isOpened={true} onClose={() => }/> */}
        </>
    );
}
export default App;


import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Slider from '../Slider/Slider';
import Advantages from '../Advantages/Advantages';
import Instagram from '../Instagram/Instagram';
import './App.css';
import SectionsWithBtn from "../SectionsWithBtn/SectionsWithBtn";


import SlickSlider from '../SharedComponents/Slider/SlickSlider';
import Popular from '../Popular/Popular';

import popular_cocoon from '../../images/popular_cocoon.png';
import popular_sleepingbag from '../../images/popular_sleepingbag.png';
import popular_milksnud from '../../images/popular_milksnud.png';
import popular_avokado from '../../images/popular_avokado.png';

import Review from '../Review/Review';

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

            <Slider media={media}/>
            <Advantages/>
            <SectionsWithBtn/>
            <Instagram/>
        </>
    );
}
export default App;


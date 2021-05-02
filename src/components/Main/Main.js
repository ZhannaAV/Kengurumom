import Slider from "../Slider/Slider";
import Popular from "../Popular/Popular";
import Advantages from "../Advantages/Advantages";
import SectionsWithBtn from "../SectionsWithBtn/SectionsWithBtn";
import Review from "../Review/Review";
import Instagram from "../Instagram/Instagram";
import {useMediaQuery} from "react-responsive";

function Main(){
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    const isLaptop = useMediaQuery({ maxWidth: 1440 });
    const isTabletHor = useMediaQuery({ maxWidth: 1280 });
    const isTabletVert = useMediaQuery({ maxWidth: 1024 });
    const isMobileHor = useMediaQuery({ maxWidth: 768 });
    const isMobileVert = useMediaQuery({ maxWidth: 480 });

    const media = {
        isDesktop,
        isLaptop,
        isTabletHor,
        isTabletVert,
        isMobileHor,
        isMobileVert,
    };

    return (
        <>
            <Slider media={media} />
            <Popular media={media} />
            <Advantages />
            <SectionsWithBtn />
            <Review media={media} />
            <Instagram />
        </>

    )
}
export default Main
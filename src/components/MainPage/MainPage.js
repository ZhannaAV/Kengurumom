import Slider from "../Slider/Slider";
import Popular from "../Popular/Popular";
import Advantages from "../Advantages/Advantages";
import SectionsWithBtn from "../SectionsWithBtn/SectionsWithBtn";
import Review from "../Review/Review";
import Instagram from "../Instagram/Instagram";
import { exampleArrProducts } from '../../config/constants';


function MainPage(props) {
  const {media, onPopupAddCartOpen} = props
  return (
    <>
      <Slider media={media}/>
      <Popular media={media} products={exampleArrProducts} onPopupAddCartOpen={onPopupAddCartOpen}/>
      <Advantages/>
      <SectionsWithBtn/>
      <Review media={media}/>
      <Instagram/>
    </>
  )
}

export default MainPage
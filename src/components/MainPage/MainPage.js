<<<<<<< HEAD
import TopSlider from "../TopSlider/TopSlider";
=======
import Slider from "../Slider/Slider";
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
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
<<<<<<< HEAD
      <TopSlider media={media}/>
=======
      <Slider media={media}/>
>>>>>>> 178ba0a90685f3fa1191f68570bfe0be4b29e479
      <Popular media={media} products={exampleArrProducts} onPopupAddCartOpen={onPopupAddCartOpen}/>
      <Advantages/>
      <SectionsWithBtn/>
      <Review media={media}/>
      <Instagram/>
    </>
  )
}

export default MainPage
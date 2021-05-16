import './Popular.css';

import popular_cocoon from '../../images/popular_cocoon.png';
import popular_sleepingbag from '../../images/popular_sleepingbag.png';
import popular_milksnud from '../../images/popular_milksnud.png';
import popular_avokado from '../../images/popular_avokado.png';

import PopularItem from '../../components/PopularItem/PopularItem';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';
import React from 'react';

//temp config. replace it with tests
const popularConfig = [
  {
    new: false,
    title: 'Пеленальный кокон',
    src: popular_cocoon,
    price: 890,
    priceSale: 1090,
  },
  {
    new: true,
    title: 'Спальник',
    src: popular_sleepingbag,
    price: 890,
    priceSale: undefined,
  },
  {
    new: false,
    title: 'Милкснуд',
    src: popular_milksnud,
    price: 1090,
    priceSale: undefined,
  },
  {
    new: false,
    title: 'Пелёнка-кокон "Авокадо"',
    src: popular_avokado,
    price: 1200,
    priceSale: undefined,
  },
  {
    new: false,
    title: 'Пелёнка-кокон "Авокадо"',
    src: popular_avokado,
    price: 1200,
    priceSale: undefined
  },
  {
    new: false,
    title: 'Пелёнка-кокон "Авокадо"',
    src: popular_avokado,
    price: 1200,
    priceSale: undefined
  },
];

export default function Popular({media, products}){
  const [width, setWidth] = React.useState(window.innerWidth);
  const [slides, setSlides] = React.useState( media.isDesktop ? 4 : media.isTabletVert ? 3 : media.isMobileHor ? 2 : 1);
  const [showArrows, setShowArrows] = React.useState(media.isDesktop ? true : false)

  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (width < 570) {
      setSlides(1);
    } else if (width < 857) {
      setSlides(2);
    } else if (width < 1020) {
      setSlides(3);
    } else {
      setSlides(4);
    }
  };

  const updateShowArrows = () => { width > 1380 ? setShowArrows(true) : setShowArrows(false) }

  React.useEffect(() => {
    updateWidth();
    updateShowArrows();
    window.addEventListener("resize", updateWidth);
    window.addEventListener("resize", updateShowArrows);
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("resize", updateShowArrows);
    }
  });

  return (
    <section className="popular">
      <h2 className="popular__title">Популярное</h2>
      <SlickSlider className="content-slider" slides={slides} showArrows={showArrows} arrowType="popular">
        {/* {popularConfig.map((item) => (
          <PopularItem {...item} key={item.title} />
        ))} */}

        {products.slice(0,6).map((item) => (
          <PopularItem {...item} key={item.id} />
        ))}
      </SlickSlider>
    </section>
  );
}

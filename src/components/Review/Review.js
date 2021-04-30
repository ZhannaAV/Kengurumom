import React from 'react';
import "./Review.css";

import review_popovadaria from '../../images/review_popovadaria.png';
import review_kateiva from '../../images/review_kateiva.png';
import review_dsai_love from '../../images/review_dsai_love.png';

import ReviewItem from '../../components/ReviewItem/ReviewItem';
import SlickSlider from '../SharedComponents/Slider/SlickSlider';

//temp config. replace it with tests
const reviewConfig = [
  {
    instaTitle: 'popovadaria',
    instaLink: 'https://www.instagram.com/popovadaria/',
    instaSrc: review_popovadaria,
    reviewShort: 'Не устану любить эти подгузники, а они меня в ответ: выпуском серии натуральной детской косметики с любимой лавандой, которая в самые',
    reviewFull: '',
  },
  {
    instaTitle: 'kate.iva',
    instaLink: 'https://www.instagram.com/kate.iva/',
    instaSrc: review_kateiva,
    reviewShort: 'Супер качество, стильный дизайн, а главное нежность и мягкость для моего ребёнка! Теперь я точно не переживаю за сон своей дочки. Очень',
    reviewFull: '',
  },
  {
    instaTitle: 'dsai_lov',
    instaLink: 'https://www.instagram.com/dsai_lov/',
    instaSrc: review_dsai_love,
    reviewShort: 'Подгузники ооочень мягкие и тонкие, запаха химического нет никакого, впитывают отлично, высокая посадка и отлично сидят на малыше. Что',
    reviewFull: '',
  },
];

export default function Review(props){
  const [width, setWidth] = React.useState(window.innerWidth);
  const [slides, setSlides] = React.useState(3);

  const updateWidth = () => {
    setWidth(window.innerWidth)
    if (width < 580) {
      setSlides(1);
    }
    else if (width < 857) {
      setSlides(2);
    }
    else {
      setSlides(3);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <section className="review">
      <h2 className="review__title">Отзывы счастливых мам</h2>
      <SlickSlider className="content-slider" slides={slides}>
        {reviewConfig.map(item => (
          <ReviewItem {...item} key={item.instaTitle}/>
        ))}
      </SlickSlider>
    </section>
  );
}
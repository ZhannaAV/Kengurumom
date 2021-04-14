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
  return (
    <section class="review">
      <h2 class="review__title">Отзывы счастливых мам</h2>
      <SlickSlider className="content-slider">
        {reviewConfig.map(item => (
          <ReviewItem item={item} />
        ))}
      </SlickSlider>
    </section>

  //   <>
  //     <figure className="review__item">
  //       <img src="./images/review_popovadaria.png" alt="popovadaria" className="review__item-img"/>
  //       <figcaption className="review__item-title"><a href="https://www.instagram.com/popovadaria/" className="review__item-insta">@popovadaria</a></figcaption>
  //       <p className="review__item-text">Не устану любить эти подгузники, а они меня в ответ: выпуском серии натуральной детской косметики с любимой лавандой, которая в самые</p>
  //       <a href="" className="review__item-text-full">Читать полностью</a>
  //     </figure>

  //     <figure className="review__item">
  //       <img src="./images/review_kateiva.png" alt="kate.iva" className="review__item-img"/>
  //       <figcaption className="review__item-title"><a href="https://www.instagram.com/kate.iva/" className="review__item-insta">@kate.iva</a></figcaption>
  //       <p className="review__item-text">Супер качество, стильный дизайн, а главное нежность и мягкость для моего ребёнка! Теперь я точно не переживаю за сон своей дочки. Очень </p>
  //       <a href="" className="review__item-text-full">Читать полностью</a>
  //     </figure>

  //     <figure className="review__item">
  //       <img src="./images/review_dsai_love.png" alt="dsai_love" className="review__item-img"/>
  //       <figcaption className="review__item-title"><a href="https://www.instagram.com/dsai_lov/" className="review__item-insta">@dsai_lov</a></figcaption>
  //       <p className="review__item-text">Подгузники ооочень мягкие и тонкие, запаха химического нет никакого, впитывают отлично, высокая посадка и отлично сидят на малыше. Что</p>
  //       <a href="" className="review__item-text-full">Читать полностью</a>
  //     </figure>
	//  </>
  );
}
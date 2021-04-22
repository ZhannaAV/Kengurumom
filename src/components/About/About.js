import React from 'react';
import './About.css';
import {photoAboutOne, photoAboutTwo, photoAboutThree} from '../../config/constants';

export default function About(props) {
  return(
    <section className='about'>
      <h2 className='about__title'>О бренде</h2>
      <div className='about__group'>
        <p className='about__text'><span className="about__text_colored">Kenguru</span> не просто про комфорт. Он про эстетику с первых дней. Про меньше, но лучше. Про функциональность и разумное потребление. Наша философия - это <span className="about__text_colored">философия комфорта</span>. Малыша и его мамы. Это помощь родителям в создании уютной, комфортной и безопасной атмосферы для малыша.</p>
        <img src={photoAboutOne} className='about__img' alt=''/>
      </div>

      <div className='about__group'>
        <img src={photoAboutTwo} className='about__img' alt=''/>
        <p className='about__text'>Мы за <span className="about__text_colored">разумное потребление</span> и за то, чтобы вещи служили как можно дольше. Мы за то, чтобы вещи были многофункциональными, именно поэтому у пелёнок есть открывающиеся плечи, а у конвертов - съёмные утеплители. Мы сохраняем наши принципы работы в каждом из своих изделий, чтобы вы имели возможность наслаждаться счастливыми моментами со своим малышом, а не беспокоиться о его комфорте.</p>
      </div>

      <div className='about__group'>
        <p className='about__text'>Мы серьезно подходим к выбору материалов, которые используем. Первые, кто пользуется нашей продукцией -  это наши собственные дети и дети близких людей. Для наших изделий мы выбираем абсолютно <span className="about__text_colored">безопасные и качественные материалы</span>, которые не вызывают аллергию, при этом сохраняя ценовую доступность для нашего покупателя. Бренд – это команда единомышленников, объединенных целью создавать <span className="about__text_colored">стильные и качественные вещи</span> для малышей. Вместе с нами работают настоящие профессионалы, которые как и мы любят свое дело. Искренне верим, что вы это почувствуете с первой покупкой нашей продукции!</p>
        <img src={photoAboutThree} className='about__img' alt=''/>
      </div>
    </section>
  );
}
import React from 'react';
import './AboutPage.css';
import StyledText from '../StyledText/StyledText';

import { photoAbout } from './constants';
import { ABOUT } from './texts';

export default function AboutPage() {
  return (
    <section className='about-page'>
      <h2 className='about-page__title'>О бренде</h2>
      {
        ABOUT.map((item, i) => (
          (i + 1) % 2 === 1
            ? <div className='about-page__group' key={i}>
              <StyledText text={item} styles={{ default: { className: 'about-page__text' }, colored: { className: 'about-page__text_colored' } }}/>
              <img src={photoAbout[i]} className='about-page__img' alt={`О бренде. Изображение ${i}`}/>
            </div>
            : <div className='about-page__group' key={i}>
              <img src={photoAbout[i]} className='about-page__img' alt={`О бренде. Изображение ${i}`}/>
              <StyledText text={item} styles={{ default: { className: 'about-page__text' }, colored: { className: 'about-page__text_colored' } }}/>
            </div>
        ))
      }
    </section>
  );
}

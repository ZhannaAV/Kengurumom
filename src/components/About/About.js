import React from 'react';
import './About.css';
import StyledText from '../StyledText/StyledText';
import {photoAboutOne, photoAboutTwo, photoAboutThree} from '../../config/constants';
import {ABOUT_1, ABOUT_2, ABOUT_3} from '../../config/texts';

export default function About(props) {
  return(
    <section className='about'>
      <h2 className='about__title'>О бренде</h2>
      <div className='about__group'>
        <StyledText text={ABOUT_1} styles={{default: {className: 'about__text'}, colored: {className: 'about__text_colored'}}}/>
        <img src={photoAboutOne} className='about__img' alt='Философия комфорта'/>
      </div>

      <div className='about__group'>
        <img src={photoAboutTwo} className='about__img' alt='Разумное потребление'/>
        <StyledText text={ABOUT_2} styles={{default: {className: 'about__text'}, colored: {className: 'about__text_colored'}}}/>
      </div>

      <div className='about__group'>
        <StyledText text={ABOUT_3} styles={{default: {className: 'about__text'}, colored: {className: 'about__text_colored'}}}/>
        <img src={photoAboutThree} className='about__img' alt='Безопасные и качественные материалы'/>
      </div>
    </section>
  );
}
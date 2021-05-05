import React from 'react';
import "./NotFoundPage.css";
import {pageNotFoundImg} from './constants';
import {pageNotFoundTitle} from './texts';
import Button from '../Button/Button';

export default function NotFoundPage(){
  return (
    <section className="not-found">
      <h2 className="not-found__title">{pageNotFoundTitle}</h2>
      <img className="not-found__img" src={pageNotFoundImg} alt="Страница не найдена" />
      <Button btnType="link" linkTo="/" text="Вернуться на главную" type="not-found__button"/>
    </section>
  )
}
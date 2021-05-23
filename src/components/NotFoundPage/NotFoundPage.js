import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css";
import {pageNotFoundImg} from './constants';
import {MAIN_PAGE} from '../../config/links';
import Button from '../Button/Button';

export default function NotFoundPage(){
  return (
    <section className="not-found">
      <h2 className="not-found__title">Упс..кажется здесь ничего нет!</h2>
      <img className="not-found__img" src={pageNotFoundImg} alt="Страница не найдена" />
      <Link to={MAIN_PAGE}>
        <Button text="Вернуться на главную" type="button" btnStyle="button_type_not-found"/>
      </Link>
    </section>
  )
}
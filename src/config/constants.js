// временные переменные до появления БД -----------------------------------------

// компонент AdvantageElement
import handicraft from '../images/advantages/handicraft.svg';
import reasonableConsumption from '../images/advantages/reasonable-consumption.svg';
import uniqueCut from '../images/advantages/unique-cut.svg';
// компонент PhotoElement
import photoInstOne from '../images/instagram/inst-1.jpg';
import photoInstTwo from '../images/instagram/inst-2.jpg';
import photoInstThree from '../images/instagram/inst-3.jpg';
import photoInstFour from '../images/instagram/inst-4.jpg';
import photoInstFive from '../images/instagram/inst-5.jpg';
import photoInstSix from '../images/instagram/inst-6.jpg';
import photoInstSeven from '../images/instagram/inst-7.jpg';
import photoInstEight from '../images/instagram/inst-8.jpg';

// компонент Product
import photoProductMain from '../images/product/main.jpg';
import photoProductOne from '../images/product/one.jpg';
import photoProductTwo from '../images/product/two.jpg';

export const instagramPhotoData = [
  { link: photoInstOne },
  { link: photoInstTwo },
  { link: photoInstThree },
  { link: photoInstFour },
  { link: photoInstFive },
  { link: photoInstSix },
  { link: photoInstSeven },
  { link: photoInstEight },
];

export const productPhotoData = [
  photoProductMain,
  photoProductOne,
  photoProductTwo,
];

// -------------------------------------------------------------------------------

export const advantagesData = [
  {
    image: handicraft,
    alt: 'Ручная работа',
    title: 'Ручная работа',
    description: 'Все вещи сделаны вручную с любовью небольшими партиями',
  },
  {
    image: reasonableConsumption,
    alt: 'Разумное потребление',
    title: 'Разумное потребление',
    description: 'Все вещи сделаны вручную с любовью небольшими партиями',
  },
  {
    image: uniqueCut,
    alt: 'Уникальный крой',
    title: 'Уникальный крой',
    description: 'Все вещи сделаны вручную с любовью небольшими партиями',
  },
];

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

export const testObjectOfProduct = {
  name: 'Пелёнка-кокон "Авокадо"',
  price: '890',
  sizes: ['0-3 мес (55см)', '3-6 мес (65см)', '7-12 мес (77см)'],
  recommendedAge: 'от 0 до 6 месяцев',
  structure: '100% хлопок (Интерлок)',
  vendorCode: 'KNG.EW.K2152',
  description: [
    'Наши пеленальные коконы созданы для тех, кто ценит качество и комфорт. Пеленальный кокон на двухзамковой молнии сшит из сертифицированного трикотажного хлопка высшей категории качества. Потайные швы не потревожат нежную кожу малыша, а трикотаж не вызовет аллергии.',
    'Многие мамы уже оценили пеленальные коконы и знают, на сколько это комфортная и удобная альтернатива пеленанию. Пройма пелёнки открывается, чтобы освободить ручки малыша и сохраняет физиологическое положение тела, позволяя ручкам и ножкам расправляться постепенно и естественно. Обеспечивается отличная воздухопроницаемость, кожа дышит даже в жару.',
    'Малышу уютно. В пелёнке прекрасно спится - мягкая бесшовная изнанка, не давит и не тянет. Кокон создаёт обволакивающую среду, к которой малыш привык о время его ожидания. Движения ребенка ограничены до той степени, при которой он не навредит себе и не проснется.',
    'Удобно маме и папе. Надеть пелёнку очень легко, подгузник меняется без лишних движений. Папа легко справится ;) Можно носить и дома, и на прогулке в коляске.',
  ],
  photos: [
    'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0004/photo-collage-example-0004_2560.jpg',
    'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
    'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  ],
};

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

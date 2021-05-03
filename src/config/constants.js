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
// компонент О бренде
import photoAboutOneImg from '../images/about/about-1.jpg';
import photoAboutTwoImg from '../images/about/about-2.jpg';
import photoAboutThreeImg from '../images/about/about-3.jpg';
import iconWash from '../images/popup_care/wash.svg';
import iconDrying from '../images/popup_care/drying.svg';
import iconIroning from '../images/popup_care/ironing.svg';
import iconDrycleaning from '../images/popup_care/drycleaning.svg';
import iconWhitening from '../images/popup_care/whitening.svg';
import iconClose from '../images/popup_close.svg';

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

export const exampleArrProducts = [
  {
    name: 'Пелёнка-кокон "Авокадо"',
    id: '5440872809420',
    price: 890,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619800174740-db1639d3936e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: false,
    sale: undefined,
    category: 'сhanging-cocoons',
  },
  {
    name: 'Пеленальный кокон',
    id: '549348024568',
    price: 2400,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619795079867-362a67e20a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2140&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: false,
    sale: 20,
    category: 'sleeping-bags',
  },
  {
    name: 'Милкснуд',
    id: '549348024348534',
    price: 1090,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619793615805-a59602265c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: false,
    sale: undefined,
    category: 'milksnuds',
  },
  {
    name: 'Спальник',
    id: '456456455474534',
    price: 1590,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619806629350-7fe987c8f613?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: true,
    sale: 5,
    category: 'milksnuds',
  },
  {
    name: 'Пелёнка-кокон "Авокадо"',
    id: '5493124809420',
    price: 890,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619792847729-100c8538f81a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: false,
    sale: undefined,
    category: 'сhanging-cocoons',
  },
  {
    name: 'Пеленальный кокон',
    id: '549348036784568',
    price: 2400,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619882903364-55fb81befd7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: true,
    sale: 20,
    category: 'sleeping-bags',
  },
  {
    name: 'Милкснуд',
    id: '5493488534',
    price: 1090,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619874536663-f8470d6d79b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: false,
    sale: undefined,
    category: 'milksnuds',
  },
  {
    name: 'Спальник',
    id: '45643466474534',
    price: 1590,
    sizes: ['0-3 мес (55 см)', '3-6 мес (65 см)', '7-12 мес (77 см)'],
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
      'https://images.unsplash.com/photo-1619856782185-f6d92ffa77e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://www.artensoft.com/sources/artensoft_com/ArtensoftPhotoCollageMaker/gallery/0002/photo-collage-example-0002_2560.jpg',
      'https://images.unsplash.com/photo-1617929912008-eaa24413b9ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    ],
    new: true,
    sale: 5,
    category: 'milksnuds',
  },
];

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

// компонент О бренде
export const photoAboutOne = photoAboutOneImg;
export const photoAboutTwo = photoAboutTwoImg;
export const photoAboutThree = photoAboutThreeImg;
export const popupClose = iconClose;

export const popupCareIcons = {
  wash: iconWash,
  drying: iconDrying,
  ironing: iconIroning,
  drycleaning: iconDrycleaning,
  whitening: iconWhitening,
};

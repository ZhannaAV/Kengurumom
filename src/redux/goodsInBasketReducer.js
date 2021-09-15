import { ADD_PPODUCT, REMOVE_PPODUCT } from './types';

const initialState = {
  goodsInBasket: [
    {
      id: 1,
      title: 'Пеленка-кокон "Авокадо',
      num: 2,
      price: 200,
      src: '',
      article: 'KNG.EW.K2152',
    },
  ],
  goodsTotaSummInBasket: 400,
  goodsCounterInBasket: 2,
};

export const goodsInBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PPODUCT:
      return { ...state, goodsInBasket: [...state.goodsInBasket, action.payload] };

    case REMOVE_PPODUCT:
      return {
        ...state,
        goodsInBasket: state.goodsInBasket.filter(p => action.payload.id !== p.id),
        goodsTotaSummInBasket:
          state.goodsTotaSummInBasket - action.payload.price * action.payload.num,
        goodsCounterInBasket: state.goodsCounterInBasket - action.payload.num,
      };

    default:
      return state;
  }
};

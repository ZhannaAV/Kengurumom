import {
  ADD_PPODUCT,
  CLEAR_BASKET,
  INCREASE_PRODUCT,
  REDUCE_PRODUCT,
  REMOVE_PPODUCT,
} from './types';

const initialState = {
  goodsInBasket: [
    {
      id: 1,
      title: 'Пеленка-кокон "Авокадо',
      num: 2,
      price: 200,
      img: 'https://images.unsplash.com/photo-1619800174740-db1639d3936e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      article: 'KNG.EW.K2152',
    },
    {
      id: 2,
      title: 'Пеленка-кокон "Авокадо',
      num: 2,
      price: 200,
      img: 'https://images.unsplash.com/photo-1619800174740-db1639d3936e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      article: 'KNG.EW.K2152',
    },
  ],
  goodsTotalSumInBasket: 800,
  goodsCounterInBasket: 4,
};

export const goodsInBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PPODUCT:
      return { ...state, goodsInBasket: [...state.goodsInBasket, action.payload] };

    case REMOVE_PPODUCT:
      return {
        ...state,
        goodsInBasket: state.goodsInBasket.filter(p => action.payload.id !== p.id),
        goodsTotalSumInBasket:
          state.goodsTotalSumInBasket - action.payload.price * action.payload.num,
        goodsCounterInBasket: state.goodsCounterInBasket - action.payload.num,
      };

    case CLEAR_BASKET:
      return { ...state, goodsInBasket: [], goodsTotalSumInBasket: 0, goodsCounterInBasket: 0 };

    case INCREASE_PRODUCT:
      return {
        ...state,
        goodsInBasket: state.goodsInBasket.map(p => {
          if (action.payload.id === p.id) {
            // eslint-disable-next-line no-param-reassign
            p.num += 1;
            return p;
          }
          return p;
        }),
        goodsTotalSumInBasket: state.goodsTotalSumInBasket + action.payload.price,
        goodsCounterInBasket: state.goodsCounterInBasket + 1,
      };

    case REDUCE_PRODUCT:
      return {
        ...state,
        goodsInBasket: state.goodsInBasket.map(p => {
          if (action.payload.id === p.id) {
            // eslint-disable-next-line no-param-reassign
            p.num -= 1;
            return p;
          }
          return p;
        }),
        goodsTotalSumInBasket: state.goodsTotalSumInBasket - action.payload.price,
        goodsCounterInBasket: state.goodsCounterInBasket - 1,
      };

    default:
      return state;
  }
};

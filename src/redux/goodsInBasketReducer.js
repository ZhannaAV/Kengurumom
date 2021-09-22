import {
  ADD_PPODUCT,
  CLEAR_BASKET,
  INCREASE_PRODUCT,
  REDUCE_PRODUCT,
  REMOVE_PPODUCT,
} from './types';

const initialState = {
  goodsInBasket: [],
  goodsTotalSumInBasket: 0,
  goodsCounterInBasket: 0,
};

export const goodsInBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PPODUCT:
      return {
        ...state,
        goodsInBasket: [
          ...state.goodsInBasket,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            vendorCode: action.payload.vendorCode,
            photo: action.payload.photos[0],
            num: 1,
          },
        ],
        goodsTotalSumInBasket: state.goodsTotalSumInBasket + action.payload.price,
        goodsCounterInBasket: state.goodsCounterInBasket + 1,
      };

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
          if (action.payload === p.id) {
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
          if (action.payload === p.id) {
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

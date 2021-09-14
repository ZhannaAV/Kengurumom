import { combineReducers } from 'redux';
import { goodsInBasketReducer } from './goodsInBasketReducer';

export const rootReducer = combineReducers({
  goods: goodsInBasketReducer,
});

import {
  ADD_PPODUCT,
  REMOVE_PPODUCT,
  CLEAR_BASKET,
  INCREASE_PRODUCT,
  REDUCE_PRODUCT,
} from './types';

export function addProduct(product) {
  return {
    type: ADD_PPODUCT,
    payload: product,
  };
}

export function removeProduct(product) {
  return {
    type: REMOVE_PPODUCT,
    payload: product,
  };
}

export function clearBasket() {
  return {
    type: CLEAR_BASKET,
  };
}

export function increaseProduct(product) {
  return {
    type: INCREASE_PRODUCT,
    payload: product,
  };
}

export function reduceProduct(product) {
  return {
    type: REDUCE_PRODUCT,
    payload: product,
  };
}

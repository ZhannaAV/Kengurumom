import { ADD_PPODUCT, REMOVE_PPODUCT } from './types';

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

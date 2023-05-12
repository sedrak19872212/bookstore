import {ADD_ITEM_IN_CART} from '../types';

export const addInCartAction = item => {
console.log('add action item',item);
  return {
      type: ADD_ITEM_IN_CART,
      data: item,
    }
};
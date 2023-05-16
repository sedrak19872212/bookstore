import {DELETE_ITEM_FROM_CART} from '../types';

export const deleteFromCartAction = item => {
console.log('delete From Cart Action',item.id);
  return {
      type: DELETE_ITEM_FROM_CART,
      data: item.id,
    }
};

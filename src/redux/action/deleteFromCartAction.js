import {DELETE_ITEM_FROM_CART} from '../types';

export const deleteFromCartAction = item => {
  return dispatch => {
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: item,
    });
  };
};

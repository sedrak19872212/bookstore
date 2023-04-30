import {ADD_ITEM_IN_CART} from '../types';

export const addInCartAction = type => {
  return dispatch => {
    dispatch({
      type: ADD_ITEM_IN_CART,
      payload: type,
    });
  };
};

import {ADD_ITEM_IN_CART} from '../types';

/*
export const addInCartAction = item => {
console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiitem',item);
  return dispatch => {
    dispatch({
      type: ADD_ITEM_IN_CART,
      payload: item,
    },console.log('ppppppppppppppppppppppppppayload',payload));
  };
};
*/

export const addInCartAction = item => {
  return {
      type: ADD_ITEM_IN_CART,
      data: item,
    }
};
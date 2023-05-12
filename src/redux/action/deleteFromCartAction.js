import {DELETE_ITEM_FROM_CART} from '../types';

/*export const deleteFromCartAction = item => {
console.log("deleteiiiiiiiiiiiiiiiiiiiiiii",item)
  return dispatch => {
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      data: item,
    },console.log("ppppppppppppppppppppppppp"));
  };
};*/


export const deleteFromCartAction = item => {
console.log('delete From Cart Action',item.id);
  return {
      type: DELETE_ITEM_FROM_CART,
      data: item.id,
    }
};

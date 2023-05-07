import {ADD_ITEM_IN_CART} from '../types';
import {DELETE_ITEM_FROM_CART} from '../types';

const INITIAL_STATE = {
  itemsInCart: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM_IN_CART:
    /*return [
    ...state,
    action.data
    ]*/
   return {
            ...state,
            setItemInCart: state.itemsInCart.push(action.data),
          };
     /* return {
        ...state,
        setItemInCart: state.itemsInCart.push(action.payload),
      };*/
    case DELETE_ITEM_FROM_CART:
      return {
      ...state,
         deleteItemFromCart : state.itemsInCart = state.itemsInCart.filter(book => book.id !== action.payload),
      };
    default:
      return state;
  }
}

import {ADD_ITEM_IN_CART} from '../types';
import {DELETE_ITEM_FROM_CART} from '../types';
import {INCREMENT_QUANTITY} from '../types';
import {DECREMENT_QUANTITY} from '../types';

const INITIAL_STATE = {
  itemsInCart: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
      case ADD_ITEM_IN_CART:
          console.log('rrrrrrreducer',action.data);
          /*    let newCartProduct;
             if(state.itemsInCart.length > 0) {
                newCartProduct = state.itemsInCart.map(product => {
                     if (product.id === action.data.id) {
                         return {
                             ...product,
                             quantity: product.quantity + 1
                         }
                     }
                     return {
                         ...product
                     };
                 })
             } else {
                 newCartProduct = action.data;
             }

             console.log('nnnnnnnnnnnnNewCaretProduct',newCartProduct);*/
      return {
           /* ...state,
          itemsInCart: newCartProduct,
          setItemInCart: state.itemsInCart.push(newCartProduct),*/
          ...state,
            setItemInCart: state.itemsInCart.push(action.data),
          };
    case DELETE_ITEM_FROM_CART:
    console.log("delete reducer, action data", action.data)
      return {
      ...state,
         deleteItemFromCart : state.itemsInCart = state.itemsInCart.filter(book => book.id !== action.data),
      };
      case INCREMENT_QUANTITY:
          console.log("INCREMENT_QUANTITY reducer, action data", action.data)
          const newCartIncrement = state.itemsInCart.map(product => {
              if(product.id === action.data) {
                  return {
                      ...product,
                      quantity: product.quantity + 1
                  }
              }
              return product;
          })
          return {
              ...state,
              itemsInCart: newCartIncrement,
          };
      case DECREMENT_QUANTITY:
          console.log("DECREMENT_QUANTITY reducer, action data", action.data)
          const newCartDecrement = state.itemsInCart.map(product => {
              if(product.id === action.data && product.quantity !== 1) {
                  return {
                      ...product,
                      quantity: product.quantity - 1
                  }
              }
              return product;
          })
          return {
              ...state,
              itemsInCart: newCartDecrement,
          };
    default:
      return state;
  }
}

import {DECREMENT_QUANTITY} from '../types';

export const decrementQuantityAction = item => {
    console.log('incrementQuantity Action',item.id);
    return {
        type: DECREMENT_QUANTITY,
        data: item.id,
    }
};
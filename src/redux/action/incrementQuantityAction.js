import {INCREMENT_QUANTITY} from '../types';

export const incrementQuantityAction = item => {
    console.log('incrementQuantity Action',item.id);
    return {
        type: INCREMENT_QUANTITY,
        data: item.id,
    }
};

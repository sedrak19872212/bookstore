import {DELETE_All_ITEMS} from '../types';

export const deleteAllItemsAction = items => {
    console.log('aaaaaaaaaaaaaaaaaaaction',items);
    return {
        type: DELETE_All_ITEMS,
        data: items,
    }
};
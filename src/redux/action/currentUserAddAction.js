import {CURRENT_USER_ADD} from '../types';

export const currentUserAddAction = user => {
    console.log('aaaaaaaaaaaaaaaaaaaction',user);
    return {
        type: CURRENT_USER_ADD,
        data: user,
    }
};
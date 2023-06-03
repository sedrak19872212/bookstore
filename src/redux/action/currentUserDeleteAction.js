import {CURRENT_USER_DELETE} from '../types';

export const currentUserDeleteAction = user => {
    console.log('aaaaaaaaaaaaaaaaaaaction',user);
    return {
        type: CURRENT_USER_DELETE,
        data: user,
    }
};
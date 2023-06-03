import {CURRENT_USER_ADD} from '../types';
import {CURRENT_USER_DELETE} from '../types';

const INITIAL_STATE = {
    user: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CURRENT_USER_ADD:
            console.log('rrrrrrrrrrrrrrrrrrreducer',action.data);
            console.log ('sssssssssssssssssssState',state);
            return {
                ...state,
               user: action.data,
            };
        case CURRENT_USER_DELETE:
            console.log ('dddddddddddddddddddddDelete',state);
            return {
                ...state,
                user: [],
            }
        default:
            return state;
    }
}

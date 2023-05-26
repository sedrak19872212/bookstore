import {CURRENT_USER_ADD} from '../types';

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
            }
        default:
            return state;
    }
}

import {CURRENT_USER_ADD} from '../types';
import {CURRENT_USER_DELETE} from '../types';

const INITIAL_STATE = {
    user: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CURRENT_USER_ADD:
            return {
                ...state,
               user: action.data,
            };
        case CURRENT_USER_DELETE:
            return {
                ...state,
                user: [],
            }
        default:
            return state;
    }
}

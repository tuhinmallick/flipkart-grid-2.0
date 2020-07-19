import { CREAT_MESSAGE } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREAT_MESSAGE:
            return (state = action.payload);
            default:
                return state;
    }
}
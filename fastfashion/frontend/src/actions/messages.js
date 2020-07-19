import { CREATE_MESSAGE, CREAT_MESSAGE } from './types';

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREAT_MESSAGE,
        payload: msg
    }
}
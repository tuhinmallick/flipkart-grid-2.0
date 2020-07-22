import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREAT_MESSAGE,
        payload: msg
    }
}

// Reutrn errors
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}
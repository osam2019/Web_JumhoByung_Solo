import { ValidationTypeError, ValidationValueError } from './errors';
import { getNameOfVariable } from './utils';
import {
	SET_TOKEN,
    CLEAR_TOKEN
} from './actionTypes';


export const setToken= ({token}) => {
    const expectedTypeOfParameters = { token: 'string' };
    if (typeof token !== expectedTypeOfParameters.token) {
        const message =
            getNameOfVariable(token) +
            ' must be ' +
            expectedTypeOfParameters.token;
        throw new ValidationTypeError(message);
    }
	
    return {
        type: SET_TOKEN,
        payload: {
            token: token,
        }
    };
};

export const clearToken = () => {
    return {
        type: CLEAR_TOKEN,
        payload: {}
    };
};
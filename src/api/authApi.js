import * as constant from 'BoardMe/src/api/constants';
import { apiRequest } from 'BoardMe/src/api/baseApiClient';

export const login = async (email, password) => {
    return apiRequest('login', 'POST', {
        email: email,
        password: password,
    })
}
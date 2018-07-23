import * as constant from 'BoardMe/src/api/constants';
import { apiRequest } from 'BoardMe/src/api/baseApiClient';

export const login = async (email, password) => {
    return apiRequest('login', 'POST', {
        email: email,
        password: password,
    })
}

export const register = async (email, username, password, passwordConf) => {
    return apiRequest('register', 'POST', {
        email: email,
        username: username,
        password: password,
        passwordConf: passwordConf,
    })
}
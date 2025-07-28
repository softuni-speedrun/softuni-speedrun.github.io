import { setUserData } from '../utils.js';
import { post } from './api.js';

const endpoints = {
    register: '/users',
    login: '/login',
    logout: '/logout'
};

export async function register(user) {
    const result = await post(endpoints.register, user);

    const userData = {
        id: result.objectId,
        sessionToken: result.sessionToken
    };

    setUserData(userData);
}

export async function login(user) {
    const result = await post(endpoints.login, user);

    const userData = {
        id: result.objectId,
        sessionToken: result.sessionToken
    };

    setUserData(userData);
}

export async function logout() {
    return post(endpoints.logout);
}
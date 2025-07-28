import { clearUserData, setUserData } from '../utils.js';
import { post } from './api.js';

const endpoints = {
    register: '/users',
    login: '/login',
    logout: '/logout'
};

export async function register(username, password) {
    const result = await post(endpoints.register, { username, password });

    const userData = {
        id: result.objectId,
        username,
        sessionToken: result.sessionToken
    };

    setUserData(userData);
}

export async function login(username, password) {
    const result = await post(endpoints.login, { username, password });

    const userData = {
        id: result.objectId,
        username,
        sessionToken: result.sessionToken
    };

    setUserData(userData);
}

export function logout() {
    post(endpoints.logout);
    clearUserData();
}
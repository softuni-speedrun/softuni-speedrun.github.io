import { getUserData } from '../utils.js';

const hostname = 'https://parseapi.back4app.com';
const appId = 'FSVwexeascWvj40hb9SNcGlLSukNdGGzMQY00cct';
const apiKey = 'tuZMC6yPZ7qCAS6xdM1pVvrn2Wr6FGfCCJRq5wcp';

async function request(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json',
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    const res = await fetch(hostname + url, options);

    if (!res.ok) {
        const error = await res.json();
        throw new Error(`${error.code} ${error.error}`);
    }

    if (res.status == 204) {
        return res;
    }

    return res.json();
}

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);

export function pointer(className, objectId) {
    return {
        __type: 'Pointer',
        className,
        objectId
    }
}

export function addOwner(record) {
    const userData = getUserData();

    return {
        ...record,
        owner: pointer('_User', userData.id)
    };
}
import { del, get, post, put, addOwner } from './api.js';

const endpoints = {
    games: '/classes/Game',
    gameById: '/classes/Game/'
};

const pageSize = 5;

export async function getAllGames(page = 1) {
    return get(endpoints.games + `?limit=${pageSize}&skip=${(page - 1) * pageSize}&count=1&order=-year`);
}

export async function getGameById(id) {
    return get(endpoints.gameById + id);
}

export async function createGame({ title, genre, year, coverUrl }) {
    return post(endpoints.games, { title, genre, year, coverUrl });
}

export async function updateGame(id, { title, genre, year, coverUrl }) {
    return put(endpoints.gameById + id, { title, genre, year, coverUrl });
}

export async function deleteGame(id) {
    return del(endpoints.gameById + id);
}
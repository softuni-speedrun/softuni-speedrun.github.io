import { addOwner, del, get, pointer, post, put } from './api.js';

const endpoints = {
    times: '/classes/Time',
    timeById: '/classes/Time/'
};

export async function getTimesByGameId(gameId) {
    return get(endpoints.times + `?order=completion_time&where=${encodeURIComponent(JSON.stringify({ game: pointer('Game', gameId) }))}`);
}

export async function submitTime(gameId, category, time) {
    const time = addOwner({
        game: pointer('Game', gameId),
        category,
        time
    });

    return post(endpoints.times, time);
}
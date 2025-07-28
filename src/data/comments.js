import { addOwner, del, get, pointer, post, put } from './api.js';

const endpoints = {
    comments: '/classes/Comment',
    commentById: '/classes/Comment/'
};

export async function getCommentsByGameId(gameId) {
    return get(endpoints.comments + `?order=-createdAt&where=${encodeURIComponent(JSON.stringify({ game: pointer('Game', gameId) }))}`);
}

export async function createComment(content, gameId) {
    const comment = addOwner({
        content,
        game: pointer('Game', gameId)
    });

    return post(endpoints.comments, comment);
}

export async function updateComment(id, comment) {
    return put(endpoints.commentById + id, comment);
}

export async function deleteComment(id) {
    return del(endpoints.commentById + id);
}
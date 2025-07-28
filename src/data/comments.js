import { addOwner, del, get, pointer, post, put } from './api.js';

const endspoints = {
    comments: '/classes/Comment',
    commentById: '/classes/Comment/'
};

export async function getCommentsByBookId(bookId) {
    return get(endspoints.comments + `?order=-createdAt&where=${encodeURIComponent(JSON.stringify({ book: pointer('Books', bookId) }))}`);
}

export async function getCommentAndBooks() {
    return get(endspoints.comments + '?include=book');
}

export async function createComment(content, bookId) {
    const comment = addOwner({
        content,
        book: pointer('Books', bookId)
    });

    return post(endspoints.comments, comment);
}

export async function updateComment(id, comment) {
    return put(endspoints.commentById + id, comment);
}

export async function deleteComment(id) {
    return del(endspoints.commentById + id);
}
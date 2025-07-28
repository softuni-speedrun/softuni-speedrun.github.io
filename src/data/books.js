import { getUserData } from '../utils.js';
import { del, get, post, put } from './api.js';

const endspoints = {
    books: '/classes/Books',
    bookById: '/classes/Books/'
};

const pageSize = 3;

export async function getAllBooks(page = 1) {
    return get(endspoints.books + `?limit=${pageSize}&skip=${(page - 1) * pageSize}&count=1&order=-createdAt`);
}

export async function getBookById(id) {
    return get(endspoints.bookById + id);
}

export async function createBook(title, author) {
    const userData = getUserData();

    const book = {
        title,
        author,
        owner: {
            __type: 'Pointer',
            className: '_User',
            objectId: userData.id
        }
    };

    return post(endspoints.books, book);
}

export async function updateBook(id, { title, author }) {
    return put(endspoints.bookById + id, { title, author });
}

export async function deleteBook(id) {
    return del(endspoints.bookById + id);
}
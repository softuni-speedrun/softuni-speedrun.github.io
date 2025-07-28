import page from 'https://unpkg.com/page@1.11.6/page.mjs';

import * as api from './data/books.js';
import * as comment from './data/comments.js';
import * as userApi from './data/users.js';

window.api = api;
window.userApi = userApi;
window.comment = comment;

page('/', () => console.log('home'));
page('/about', () => console.log('about'));

page.start();
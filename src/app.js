import page from '@page';
import { render, html } from '@lit';

import * as api from './data/books.js';
import * as comment from './data/comments.js';
import * as userApi from './data/users.js';

window.api = api;
window.userApi = userApi;
window.comment = comment;

page('/', () => console.log('home'));
page('/about', () => console.log('about'));

page.start();

render(html`<h2>Rendering setup<h2>`, document.body);
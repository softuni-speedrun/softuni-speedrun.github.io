import page from '@page';

import { homeView } from './views/home.js';
import { aboutView } from './views/about.js';
import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { addNavbar } from './middlewares/navbar.js';
import { navbarTemplate } from './views/navbar.js';
import { registerView } from './views/register.js';

const root = document.querySelector('main');
const navbar = document.querySelector('nav.navbar');

page(addSession());
page(addNavbar(navbarTemplate, navbar, onLogoutSuccess));
page(addRender(root));

page('/', homeView);
page('/about', aboutView);
page('/register', registerView);

page.start();

function onLogoutSuccess() {
    page.redirect('/');
}
import { html } from '@lit';

import { logout } from '../data/users.js';

export const navbarTemplate = (hasUser, onLogoutSuccess) => html`
<div class="nav-logo">SpeedRun Central</div>
<ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/games">Games</a></li>
    <li><a href="/about">About</a></li>
    ${hasUser
        ? html`<li><a href="javascript:void(0)" @click=${() => onLogout(onLogoutSuccess)}>Logout</a></li>`
        : html`
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>`
    }
</ul>`;

function onLogout(onLogoutSuccess) {
    logout();
    onLogoutSuccess();
}
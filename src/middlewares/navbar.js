import { render } from '@lit';

export function addNavbar(navbarTemplate, root, onLogoutSuccess) {
    return function (ctx, next) {
        render(navbarTemplate(ctx.user, onLogoutSuccess), root);

        next();
    }
}
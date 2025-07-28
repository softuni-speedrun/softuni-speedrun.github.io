import { render } from '@lit';

export function addRender(root) {
    return function (ctx, next) {
        ctx.render = function(content) {
            render(content, root);
        };

        next();
    };
}
import { getUserData } from '../utils.js';

export function addSession() {
    return function(ctx, next) {
        ctx.user = getUserData();

        next();
    }
}
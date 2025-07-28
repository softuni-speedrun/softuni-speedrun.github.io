import { html, nothing } from '@lit';

import { register } from '../data/users.js';
import { handleSubmit } from '../utils.js';

const regsiterTemplate = (onRegister, errors) => html`
<section class="form-container">
    <h2>Register</h2>
    <form @submit=${onRegister}>
        <label>
            ${errors?.username ? html`<p class="err-msg">${errors.username}</p>` : nothing}
            Username:
            <input type="text" name="username">
        </label>

        <label>
            ${errors?.password ? html`<p class="err-msg">${errors.password}</p>` : nothing}
            Password:
            <input type="password" name="password">
        </label>

        <label>
            ${errors?.repass ? html`<p class="err-msg">${errors.repass}</p>` : nothing}
            Repeat Password:
            <input type="password" name="repass">
        </label>

        <button type="submit">Register</button>
    </form>
</section>`;

export function registerView(ctx) {
    update();

    function update(errors) {
        ctx.render(regsiterTemplate(handleSubmit(onRegsiter), errors));
    }

    async function onRegsiter({ username, password, repass }, form) {
        try {
            const errors = new Map();

            if (!username) {
                errors.set('username', 'Username is required');
            }
            if (!password) {
                errors.set('password', 'Password is required');
            }
            if (password != repass) {
                errors.set('repass', 'Passwords don\'t match');
            }

            if (errors.size != 0) {
                throw {
                    message: 'Validation failed',
                    validation: Object.fromEntries(errors.entries())
                }
            }

            await register(username, password);

            form.reset();

            ctx.page.redirect('/games');

        } catch (err) {
            if (err.validation) {
                update(err.validation)
            } else {
                alert(err.message);
            }
        }
    }
}
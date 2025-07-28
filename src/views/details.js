import { html } from '@lit';
import { until } from '@lit/directives/until.js';

import { loading } from './loading.js';
import { getGameById } from '../data/games.js';

const detailsTemplate = (game) => html`
<section class="game-detail">
    ${until(game, loading())}
</section>`;

const gameTemplate = (game, comments, onShowComments) => html`
<h2>${game.title}</h2>
<img src=${game.coverUrl} />
<h3>Leaderboard</h3>
<ol>
    <li>SpeedySam - 12:34</li>
    <li>FastFury - 13:20</li>
</ol>

<button type="submit">Submit New Time</button>

${comments?.length ? commentsTemplate(comments) : html`<button @click=${onShowComments}>Load Comments</button>`}
`;

const commentsTemplate = (comments) => html`
<h3>Comments</h3>
<form>
    <textarea placeholder="Add your comment..." required></textarea>
    <button type="submit">Post Comment</button>
</form>`;

export function detailsView(ctx) {
    const id = ctx.params.id;

    ctx.render(detailsTemplate(loadGame(id)));
}

async function loadGame(id) {
    const game = await getGameById(id);

    return gameTemplate(game);
}
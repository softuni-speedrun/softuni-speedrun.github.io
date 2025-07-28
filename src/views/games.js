import { html } from '@lit';
import { until } from '@lit/directives/until.js';

import { loading } from './loading.js';
import { getAllGames } from '../data/games.js';

const gamesTemplate = (list) => html`
<section class="game-list">
    <h2>Submitted Games</h2>
    ${until(list, loading())}
</section>`;

const gamesList = (games, page, pages) => html`
<ul>
    ${games.length ? games.map(gamePreview) : html`<p>Game tracking list is empty</p>`}
</ul>
<div class="pagination">
    ${page == 1 ? 'Previous' : html`<a href="/games?page=${page - 1}">Previous</a>`}
    <span>Page ${page} of ${pages}</span>
    ${page >= pages ? 'Next' : html`<a href="/games?page=${page + 1}">Next</a>`}
</div>`;

const gamePreview = (game) => html`
<li>
    <a href="/games/${game.objectId}">${game.title} (${game.year})</a>
</li>`;

export function gamesView(ctx) {
    const url = new URL(ctx.path, location.origin)
    const page = Number(url.searchParams.get('page')) || 1;

    ctx.render(gamesTemplate(loadGames(page)));
}

async function loadGames(page) {
    const games = await getAllGames(page);

    return gamesList(games.results, page, games.pages);
}
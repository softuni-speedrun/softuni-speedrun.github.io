import { html } from '@lit';

const homeTemplate = () => html`
<section class="landing">
    <h1>Welcome to SpeedRun Central</h1>
    <p>Your hub for sharing and competing with game speedruns. Join the race!</p>
</section>`;

export function homeView(ctx) {
    ctx.render(homeTemplate());
}
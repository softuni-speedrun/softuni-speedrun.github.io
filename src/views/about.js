import { html } from '@lit';

const aboutTemplate = () => html`
<section class="about">
    <h2>About SpeedRun Central</h2>
    <p>SpeedRun Central is a fan-driven platform to track, share, and celebrate speedrunning achievements across all
        kinds of games. Whether you're a casual sprinter or a leaderboard chaser, there's a spot here for you.</p>
</section>`;

export function aboutView(ctx) {
    ctx.render(aboutTemplate());
}
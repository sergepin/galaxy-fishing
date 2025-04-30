<script lang="ts">
    import Leaderboard from '$lib/components/Leaderboard.svelte';
    import Market from '$lib/components/Market.svelte';
    import About from '$lib/components/About.svelte';
</script>

<main class="container mx-auto px-4 py-12">
    <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold nes-text is-primary tracking-wide mb-4">
            Galaxy Fishing
        </h1>
        <div class="nes-container is-rounded is-dark max-w-2xl mx-auto">
            <div class="message-list">
                <div class="message -left">
                    <div class="nes-balloon from-left">
                        <p>Welcome to Galaxy Fishing! Cast your line and catch the stars!</p>
                    </div>
                    <i class="nes-icon trophy is-large icon-container"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="space-y-16">
        <div class="w-full">
            <Leaderboard />
        </div>
        <div class="w-full">
            <Market />
        </div>
        <div class="w-full">
            <About />
        </div>
    </div>
</main>

<style>
    .message-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .message {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .message.-left {
        align-self: flex-start;
    }

    .nes-balloon {
        max-width: 80%;
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    h1 {
        text-shadow: 2px 2px 0 var(--primary-color),
                    4px 4px 0 rgba(0, 0, 0, 0.2);
        letter-spacing: 0.1em;
    }
</style>

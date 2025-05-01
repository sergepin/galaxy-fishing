<script lang="ts">
    import Leaderboard from '$lib/components/Leaderboard.svelte';
    import Market from '$lib/components/Market.svelte';
    import About from '$lib/components/About.svelte';
</script>

<main class="container mx-auto px-4 py-12">
    <div class="text-center mb-16">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold nes-text is-primary tracking-wide mb-8">
            Galaxy Fishing
        </h1>
        <div class="flex justify-center items-center mb-12">
            <div class="message-list">
                <div class="message">
                    <div class="nes-balloon from-left">
                        <p class="text-xl">Welcome to Galaxy Fishing! Power up your rod and reel in cosmic critters!</p>
                    </div>
                    <i class="nes-icon trophy is-large icon-container"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="space-y-32">
        <div class="w-full mt-36">
            <Leaderboard />
        </div>
        <div class="w-full mt-36">
            <Market />
        </div>
        <div class="w-full mt-36">
            <About />
        </div>
    </div>
</main>

<style>
    .message-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .message {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .nes-balloon {
        max-width: 100%;
        background: white;
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-left: 1rem;
    }

    h1 {
        text-shadow: 2px 2px 0 var(--primary-color),
                    4px 4px 0 rgba(0, 0, 0, 0.2);
        letter-spacing: 0.15em;
        background: linear-gradient(45deg, var(--primary-color), #ff6b6b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: glow 2s ease-in-out infinite alternate;
        font-size: clamp(2.5rem, 5vw, 4rem);
        line-height: 1.2;
    }

    @keyframes glow {
        from {
            text-shadow: 2px 2px 0 var(--primary-color),
                        4px 4px 0 rgba(0, 0, 0, 0.2);
        }
        to {
            text-shadow: 3px 3px 0 var(--primary-color),
                        6px 6px 0 rgba(0, 0, 0, 0.3);
        }
    }
</style>

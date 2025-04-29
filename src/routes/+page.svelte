<script lang="ts">
    import Leaderboard from '$lib/components/Leaderboard.svelte';
    import Market from '$lib/components/Market.svelte';
</script>

<main class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-8 sm:mb-12">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold nes-text is-primary mb-4">Galaxy Fishing</h1>
            <div class="nes-balloon from-left is-dark max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
                <p class="nes-text is-primary text-xs sm:text-sm md:text-base">Welcome to the ultimate fishing competition!</p>
            </div>
        </header>
        
        <div class="space-y-8 sm:space-y-12">
            <Leaderboard />
            <Market />
        </div>
    </div>
</main>

<style>
    .space-y-12 > * + * {
        margin-top: 3rem;
    }
</style>

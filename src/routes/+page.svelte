<script lang="ts">
    import Leaderboard from '$lib/components/Leaderboard.svelte';
    import Market from '$lib/components/Market.svelte';
</script>

<main class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto">
        <header class="py-6 px-4">
            <h1 class="text-4xl font-bold text-center text-gray-800">Galaxy Fishing</h1>
        </header>
        
        <div class="space-y-12">
            <Leaderboard />
            <Market />
        </div>
    </div>
</main>

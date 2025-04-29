<script lang="ts">
    import type { Item } from '../types';
    import { onMount } from 'svelte';
    import { fetchWithCache, fetchMarket } from '../api';

    let items: Item[] = [];
    let loading = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            const data = await fetchWithCache('market', fetchMarket);
            items = data.items;
        } catch (e) {
            error = 'Failed to load market items';
            console.error(e);
        } finally {
            loading = false;
        }
    });
</script>

<div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6 text-center">Market</h2>
    
    {#if loading}
        <div class="flex justify-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
    {:else if error}
        <div class="text-red-500 text-center">{error}</div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each items as item}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">{item.name}</h3>
                        <p class="text-gray-600 mb-4">{item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">Type: {item.type}</span>
                            <span class="text-lg font-bold text-yellow-600">{item.cost} gold</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div> 
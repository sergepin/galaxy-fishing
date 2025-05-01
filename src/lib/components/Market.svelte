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

<div class="nes-container with-title is-centered w-full max-w-screen-xl mx-auto p-4">
    <p class="title text-xl">Market</p>

    {#if loading}
        <div class="nes-container is-centered mt-8">
            <i class="nes-icon star is-large"></i>
            <p class="mt-2">Loading...</p>
        </div>
    {:else if error}
        <div class="nes-container is-centered is-error mt-8">
            <p>{error}</p>
        </div>
    {:else}
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-2 mt-6">
            {#each items as item}
                <div class="nes-container is-rounded is-dark flex flex-col h-full min-h-[300px]">
                    <div class="flex flex-col gap-2 flex-grow">
                        <p class="item-title font-bold text-lg text-yellow-400">{item.name}</p>
                        <p class="item-description text-sm text-gray-200">{item.description}</p>
                        <span class="nes-text is-info text-xs sm:text-sm">Type: {item.type}</span>
                    </div>
                    <div class="mt-auto pt-4">
                        <div class="nes-container is-rounded is-dark flex items-center justify-center gap-1">
                            <i class="nes-icon coin is-medium mr-8"></i>
                            <span class="nes-text is-warning text-sm font-semibold whitespace-nowrap ml-1">
                                {item.cost} gold
                            </span>
                        </div>
                    </div>

                </div>
            {/each}
        </div>
    {/if}
</div>

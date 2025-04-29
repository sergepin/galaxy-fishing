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

<div class="nes-container with-title is-centered w-full">
    <p class="title">Market</p>
    
    {#if loading}
        <div class="nes-container is-centered">
            <i class="nes-icon star is-large"></i>
            <p>Loading...</p>
        </div>
    {:else if error}
        <div class="nes-container is-centered is-error">
            <p>{error}</p>
        </div>
    {:else}
        <div class="lists">
            {#each items as item}
                <div class="nes-container is-rounded is-dark w-full h-full flex flex-col">
                    <div class="nes-container with-title flex-1 flex flex-col">
                        <p class="item-title">{item.name}</p>
                        <p class="item-description flex-1">{item.description}</p>
                        <div class="nes-container is-rounded is-dark mt-2">
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <span class="nes-text is-primary text-xs sm:text-sm truncate">Type: {item.type}</span>
                                <span class="nes-text is-warning text-xs sm:text-sm whitespace-nowrap">{item.cost} gold</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .lists {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style> 
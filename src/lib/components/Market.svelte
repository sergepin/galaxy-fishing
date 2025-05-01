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
                        <span class="nes-text is-info text-xs sm:text-sm mt-1">Type: {item.type}</span>
                        <div class="nes-container is-rounded is-dark mt-2">
                            <div class="flex justify-center">
                                <span class="nes-text is-warning text-xs sm:text-sm whitespace-nowrap">{item.cost} gold</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div> 
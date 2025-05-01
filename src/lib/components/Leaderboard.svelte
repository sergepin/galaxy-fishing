<script lang="ts">
    import type { Player } from '../types';
    import { fetchWithCache, fetchLeaderboard } from '../api';
    import { onMount } from 'svelte';

    let players: Player[] = [];
    let showAll = false;
    let loading = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            const data = await fetchWithCache('leaderboard', fetchLeaderboard);
            players = data.players;
        } catch (e) {
            error = 'Failed to load leaderboard';
            console.error(e);
        } finally {
            loading = false;
        }
    });

    const toggleShowAll = () => {
        showAll = !showAll;
    };

    $: displayedPlayers = showAll ? players : players.slice(0, 10);
</script>

<div class="nes-container with-title is-centered w-full">
    <p class="title">Leaderboard</p>
    
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
        <div class="overflow-x-auto">
            <table class="nes-table is-bordered is-centered w-full">
                <thead>
                    <tr>
                        <th class="text-black">Rank</th>
                        <th class="text-black">Username</th>
                        <th class="text-black">Level</th>
                        <th class="text-black">XP</th>
                        <th class="text-black">Gold</th>
                    </tr>
                </thead>
                <tbody>
                    {#each displayedPlayers as player}
                        <tr>
                            <td class="text-black">{player.rank}</td>
                            <td class="text-black truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px]">{player.username}</td>
                            <td class="text-black">{player.level}</td>
                            <td class="text-black">{player.xp}</td>
                            <td class="text-black">{player.gold}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        {#if players.length > 10}
            <div class="flex justify-center mt-4">
                <button class="nes-btn is-primary" on:click={toggleShowAll}>
                    {showAll ? 'Show Top 10' : 'Show All Players'}
                </button>
            </div>
        {/if}
    {/if}
</div> 
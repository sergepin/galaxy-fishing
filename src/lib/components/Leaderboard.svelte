<script lang="ts">
    import type { Player } from '../types';
    import { onMount } from 'svelte';
    import { fetchWithCache, fetchLeaderboard } from '../api';

    let players: Player[] = [];
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
</script>

<div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6 text-center">Leaderboard</h2>
    
    {#if loading}
        <div class="flex justify-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
    {:else if error}
        <div class="text-red-500 text-center">{error}</div>
    {:else}
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="py-3 px-4 text-left">Rank</th>
                        <th class="py-3 px-4 text-left">Username</th>
                        <th class="py-3 px-4 text-left">Level</th>
                        <th class="py-3 px-4 text-left">XP</th>
                        <th class="py-3 px-4 text-left">Gold</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    {#each players as player}
                        <tr class="hover:bg-gray-50">
                            <td class="py-3 px-4">{player.rank}</td>
                            <td class="py-3 px-4 font-medium">{player.username}</td>
                            <td class="py-3 px-4">{player.level}</td>
                            <td class="py-3 px-4">{player.xp}</td>
                            <td class="py-3 px-4">{player.gold}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</div> 
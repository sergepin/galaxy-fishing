import type { LeaderboardResponse, MarketResponse } from './types';

const API_BASE_URL = 'https://api-game.bloque.app/game';

export async function fetchLeaderboard(): Promise<LeaderboardResponse> {
    const response = await fetch(`${API_BASE_URL}/leaderboard`);
    if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
    }
    return response.json();
}

export async function fetchMarket(): Promise<MarketResponse> {
    const response = await fetch(`${API_BASE_URL}/market`);
    if (!response.ok) {
        throw new Error('Failed to fetch market');
    }
    return response.json();
}

const cache = new Map<string, { data: any; timestamp: number }>();

export async function fetchWithCache<T>(
    key: string,
    fetchFn: () => Promise<T>,
    cacheTime = 30000 // 30 seconds
): Promise<T> {
    const cached = cache.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < cacheTime) {
        return cached.data;
    }

    try {
        const data = await fetchFn();
        cache.set(key, { data, timestamp: now });
        return data;
    } catch (error) {
        if (cached) {
            return cached.data;
        }
        throw error;
    }
} 
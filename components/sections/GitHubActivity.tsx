'use client';

import { useEffect, useState } from 'react';
import { GitCommit, Star, Activity } from 'lucide-react';

interface GitHubEvent {
    id: string;
    type: string;
    actor: {
        login: string;
        avatar_url: string;
    };
    repo: {
        name: string;
        url: string;
    };
    created_at: string;
    payload: unknown;
}

export function GitHubActivity() {
    const [lastEvent, setLastEvent] = useState<GitHubEvent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const username = 'Mahaprasad003';

    useEffect(() => {
        async function fetchGitHubActivity() {
            try {
                setLoading(true);
                // Add cache busting to ensure fresh data
                const response = await fetch(`https://api.github.com/users/${username}/events?t=${new Date().getTime()}`);

                if (!response.ok) {
                    console.error('GitHub API Response:', response.status);
                    throw new Error('Failed to fetch');
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    console.error('GitHub API Data is not array:', data);
                    throw new Error('Invalid data format');
                }

                // Expanded list of relevant events
                const event = data.find((e: GitHubEvent) =>
                    ['PushEvent', 'WatchEvent', 'PullRequestEvent', 'CreateEvent', 'ForkEvent', 'IssuesEvent'].includes(e.type)
                );

                if (event) {
                    setLastEvent(event);
                } else if (data.length > 0) {
                    // Fallback to the very first event if no specific types match, just to show something
                    setLastEvent(data[0]);
                }
            } catch (error) {
                console.error('Error fetching GitHub activity:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHubActivity();
    }, [username]);

    if (loading) return (
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 animate-pulse opacity-50">
            <div className="h-6 bg-zinc-800 rounded w-24"></div>
            <div className="h-6 bg-zinc-800 rounded w-full"></div>
        </div>
    );

    // Fallback UI if no data or error - ensure SOMETHING renders
    if (error || !lastEvent) return (
        <div className="mt-8 pt-8 border-t border-zinc-900/50">
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 opacity-70">
                <span className="text-zinc-500 font-medium text-lg flex items-center gap-2">
                    active now
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-zinc-400 flex items-center gap-2">
                        <Activity size={14} />
                        <span>exploring new technologies</span>
                    </span>
                    <span className="text-zinc-600 text-sm font-mono">
                        github • {username}
                    </span>
                </div>
            </div>
        </div>
    );

    const getTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        if (seconds < 60) return 'just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
        return `${Math.floor(seconds / 86400)}d ago`;
    };

    const getEventText = (event: GitHubEvent) => {
        // Clean repo name (remove username prefix if possible for cleaner look, or keep it)
        const repoName = event.repo.name.replace(`${username}/`, '');

        switch (event.type) {
            case 'PushEvent':
                return `pushed to ${repoName}`;
            case 'WatchEvent':
                return `starred ${repoName}`;
            case 'PullRequestEvent':
                return `opened PR in ${repoName}`;
            case 'CreateEvent':
                return `created ${repoName}`;
            case 'ForkEvent':
                return `forked ${repoName}`;
            case 'IssuesEvent':
                return `opened issue in ${repoName}`;
            default:
                return `active on ${repoName}`;
        }
    };

    return (
        <div className="mt-8 pt-8 border-t border-zinc-900/50">
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                <span className="text-zinc-500 font-medium text-lg flex items-center gap-2">
                    active now <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-zinc-300 flex items-center gap-2">
                        {lastEvent.type === 'WatchEvent' ? <Star size={16} /> : <GitCommit size={16} />}
                        {getEventText(lastEvent)}
                    </span>
                    <span className="text-zinc-600 text-sm font-mono">
                        {getTimeAgo(lastEvent.created_at)} • via github
                    </span>
                </div>
            </div>
        </div>
    );
}

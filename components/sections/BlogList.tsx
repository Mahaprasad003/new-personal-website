'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { FadeIn } from '@/components/ui/FadeIn';

interface BlogListProps {
    posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    const [visibleCount, setVisibleCount] = useState(10);
    const visiblePosts = posts.slice(0, visibleCount);
    const hasMore = visibleCount < posts.length;

    const loadMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    return (
        <div className="space-y-12">
            <div className="space-y-10">
                {visiblePosts.map((post) => (
                    <FadeIn key={post.title}>
                        <Link href={post.substackUrl} target="_blank" className="block group">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                <h2 className="text-lg sm:text-xl text-zinc-300 group-hover:text-white transition-colors font-medium lowercase">
                                    {post.title.toLowerCase()}
                                </h2>
                                <span className="text-zinc-600 text-sm font-mono mt-1 sm:mt-0">
                                    {post.date}
                                </span>
                            </div>
                            <p className="text-zinc-500 text-base pr-8 group-hover:text-zinc-400 transition-colors lowercase">
                                {post.excerpt.toLowerCase()}
                            </p>
                        </Link>
                    </FadeIn>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center pt-8">
                    <button
                        onClick={loadMore}
                        className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm lowercase border border-zinc-800 hover:border-zinc-600 rounded-full px-6 py-2"
                    >
                        load more ({posts.length - visibleCount} remaining)
                    </button>
                </div>
            )}
        </div>
    );
}

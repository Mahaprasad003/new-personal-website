'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';

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
            <div className="grid grid-cols-1 gap-12">
                {visiblePosts.map((post) => (
                    <FadeIn key={post.title}>
                        <Link href={post.substackUrl} target="_blank" className="block group">
                            <div className="group relative transition-transform duration-300 hover:-translate-y-1">
                                <div className="flex justify-between items-baseline mb-3">
                                    <h2 className="text-xl font-medium text-zinc-200 group-hover:text-white transition-colors lowercase">
                                        {post.title.toLowerCase()}
                                    </h2>
                                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-500 -translate-x-2 group-hover:translate-x-0">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>
                                <p className="text-zinc-500 text-base leading-relaxed mb-4 max-w-xl lowercase">
                                    {post.excerpt.toLowerCase()}
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs text-zinc-600 uppercase tracking-wider border border-zinc-900 px-2 py-1 rounded-sm lowercase">
                                        {post.date}
                                    </span>
                                </div>
                            </div>
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

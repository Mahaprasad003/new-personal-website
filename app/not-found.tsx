'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout } from '@/components/ui/Layout';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <Layout>
            <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-zinc-900 via-background to-background opacity-50" />

                {/* Floating 404 with parallax */}
                <motion.div
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Giant 404 */}
                    <motion.h1
                        className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-bold tracking-tighter leading-none select-none"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                        }}
                    >
                        404
                    </motion.h1>

                    {/* Glitch effect shadow */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{
                            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                        }}
                    >
                        <span
                            className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-bold tracking-tighter leading-none opacity-10 text-red-500 blur-sm select-none"
                        >
                            404
                        </span>
                    </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                    className="relative z-10 text-center mt-4 md:mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="text-zinc-400 text-lg md:text-2xl lowercase mb-2">
                        lost in the void
                    </p>
                    <p className="text-zinc-600 text-sm md:text-base lowercase">
                        this page doesn&apos;t exist. maybe it never did.
                    </p>
                </motion.div>

                {/* Navigation links */}
                <motion.div
                    className="relative z-10 flex flex-col sm:flex-row gap-4 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <Link
                        href="/"
                        className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-300 text-zinc-300 hover:text-white lowercase"
                    >
                        <Home size={18} className="group-hover:scale-110 transition-transform" />
                        <span>back home</span>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="group flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-300 text-zinc-500 hover:text-zinc-300 lowercase"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>go back</span>
                    </button>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 text-xs lowercase tracking-widest">
                    error 404 • page not found
                </div>
            </main>
        </Layout>
    );
}

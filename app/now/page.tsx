import Navbar from '@/components/ui/Navbar';
import { Layout } from '@/components/ui/Layout';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/FadeIn';
import { GitHubActivity } from '@/components/sections/GitHubActivity';

export default function Now() {
    return (
        <Layout>
            <Navbar />
            <main className="max-w-3xl mx-auto pt-20">
                <FadeIn>
                    <h1 className="text-3xl font-bold text-zinc-100 mb-12 lowercase tracking-tight">now</h1>
                </FadeIn>

                <FadeInStagger className="space-y-12 text-zinc-400 leading-relaxed font-light lowercase text-lg">

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-500 font-medium text-lg">current focus</span>
                            <span className="text-zinc-300">
                                mastering large language models & building minimalist interfaces. currently working on agentic workflows and fine-tuning llama-3 for specialized tasks.
                            </span>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-500 font-medium text-lg">learning</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-zinc-300">advanced rust via &quot;rust for rustaceans&quot;</span>
                                <span className="text-zinc-300">distributed systems architecture</span>
                                <span className="text-zinc-300">generative art with three.js</span>
                            </div>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-500 font-medium text-lg">reading</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-zinc-300">&quot;superintelligence&quot; by nick bostrom</span>
                                <span className="text-zinc-300">&quot;refactoring ui&quot; by adam wathan & steve schoger</span>
                                <span className="text-zinc-300">&quot;snow crash&quot; by neal stephenson</span>
                            </div>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-500 font-medium text-lg">personal life</span>
                            <span className="text-zinc-300">
                                training for a half-marathon, exploring vellore&apos;s coffee scene, and curating my digital garden.
                            </span>
                        </div>
                    </FadeInItem>

                    <GitHubActivity />
                </FadeInStagger>
            </main>
        </Layout>
    );
}

import Navbar from '@/components/ui/Navbar';
import { Layout } from '@/components/ui/Layout';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/FadeIn';
import { GitHubActivity } from '@/components/sections/GitHubActivity';

export default function Now() {
    return (
        <Layout>
            <Navbar />
            <main className="max-w-3xl mx-auto pt-8 md:pt-20">
                <FadeIn>
                    <h1 className="text-3xl font-bold text-zinc-100 mb-12 lowercase tracking-tight">now</h1>
                </FadeIn>

                <FadeInStagger className="space-y-12 text-zinc-400 leading-relaxed font-light lowercase text-lg">

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-400 font-medium text-lg">current focus</span>
                            <span className="text-zinc-300">
                                mastering large language models. currently working on learning rag workflows and fine-tuning. bridging the gap between theory and application.
                            </span>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-400 font-medium text-lg">learning</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-zinc-300">building production ml apis with fastapi</span>
                                <span className="text-zinc-300">containerization and mlops pipelines</span>
                                <span className="text-zinc-300">system design for ml at scale</span>
                            </div>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-400 font-medium text-lg">reading</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-zinc-300">Designing Machine Learning Systems by chip huyen</span>
                            </div>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <span className="text-zinc-400 font-medium text-lg">personal life</span>
                            <span className="text-zinc-300">
                                cutting down on distractions, curating my digital garden, and playing games.
                            </span>
                        </div>
                    </FadeInItem>

                    <GitHubActivity />
                </FadeInStagger>
            </main>
        </Layout>
    );
}

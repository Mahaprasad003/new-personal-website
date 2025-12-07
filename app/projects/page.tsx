import Navbar from '@/components/ui/Navbar';
import { Layout } from '@/components/ui/Layout';
import { getProjects } from '@/lib/data';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/FadeIn';

export default async function Projects() {
    const projects = await getProjects();

    return (
        <Layout>
            <Navbar />
            <main className="max-w-3xl mx-auto pt-20 pb-32">
                <FadeIn>
                    <h1 className="text-3xl font-bold text-zinc-100 mb-12 lowercase tracking-tight">projects</h1>
                </FadeIn>

                <FadeInStagger className="grid grid-cols-1 gap-12">
                    {projects.map((project) => (
                        <FadeInItem key={project.id}>
                            <div className="group relative transition-transform duration-300 hover:-translate-y-1">
                                <div className="flex justify-between items-baseline mb-3">
                                    <h2 className="text-xl font-medium text-zinc-200 group-hover:text-white transition-colors lowercase">
                                        {project.title.toLowerCase()}
                                    </h2>
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-500 hover:text-zinc-300 -translate-x-2 group-hover:translate-x-0"
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                                <p className="text-zinc-500 text-base leading-relaxed mb-4 max-w-xl lowercase">
                                    {project.description.toLowerCase()}
                                </p>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-zinc-600 uppercase tracking-wider border border-zinc-900 px-2 py-1 rounded-sm lowercase">
                                            {tag.toLowerCase()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </main>
        </Layout>
    );
}

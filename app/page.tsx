import Navbar from '@/components/ui/Navbar';
import { Layout } from '@/components/ui/Layout';
import { Github, Linkedin, Twitter, Mail, FileUser } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/FadeIn';
import { RollingLink } from '@/components/ui/RollingLink';

export default function Home() {
    return (
        <Layout>
            <Navbar />
            <main className="max-w-4xl mx-auto pt-10">

                {/* Editorial Hero: Stronger Gradient */}
                <FadeIn>
                    <div className="border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 pb-12 mb-16 overflow-hidden">
                        {/* 
                   Optical Alignment Strategy v2:
                   - Removed negative margin from H1 to prevents clipping (user reported 'd' cut off).
                   - Added ml-[3px] md:ml-[5px] to Intro and Description to align them with the natural visual start of the H1 glyphs.
                */}
                        <p className="text-zinc-400 mb-4 lowercase text-lg md:text-xl ml-[3px] md:ml-[5px]">hi, i&apos;m mahaprasad</p>
                        <h1 className="text-6xl md:text-8xl font-bold bg-linear-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent tracking-tighter leading-none mb-6 whitespace-nowrap lowercase select-none pb-2">
                            data scientist.
                        </h1>
                        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed lowercase ml-[3px] md:ml-[5px]">
                            crafting intelligence from chaos.
                        </p>
                    </div>
                </FadeIn>

                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-16 text-zinc-500 dark:text-zinc-400 font-light text-lg leading-relaxed lowercase">
                    <FadeInItem>
                        <div className="space-y-6">
                            <h2 className="text-foreground font-medium text-base uppercase tracking-widest mb-4">the work</h2>
                            <p>
                                i build systems that <span className="text-foreground">learn</span>. from classical ml to modern rag systems.
                                <br />systems thinker. high-agency builder.
                            </p>
                            <p>
                                master&apos;s in data science from <span className="text-foreground">vit</span>. <br />i use <span className="text-foreground">fedora</span> (btw).
                            </p>
                        </div>
                    </FadeInItem>

                    <FadeInItem>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-foreground font-medium text-base uppercase tracking-widest mb-4">connect</h2>
                                <div className="flex flex-col gap-3 text-xl">
                                    <RollingLink href="https://github.com/Mahaprasad003" target="_blank" className="text-zinc-500 hover:text-foreground">
                                        <span className="flex items-center gap-3"><Github size={20} /> github</span>
                                    </RollingLink>
                                    <RollingLink href="https://x.com/mahaprasad_" target="_blank" className="text-zinc-500 hover:text-foreground">
                                        <span className="flex items-center gap-3"><Twitter size={20} /> twitter</span>
                                    </RollingLink>
                                    <RollingLink href="https://www.linkedin.com/in/mahaprasad003/" target="_blank" className="text-zinc-500 hover:text-foreground">
                                        <span className="flex items-center gap-3"><Linkedin size={20} /> linkedin</span>
                                    </RollingLink>
                                    <RollingLink href="mailto:mahaprasad003@gmail.com" className="text-zinc-500 hover:text-foreground">
                                        <span className="flex items-center gap-3"><Mail size={20} /> email</span>
                                    </RollingLink>
                                    <RollingLink href="/resume.pdf" target="_blank" className="text-zinc-500 hover:text-foreground">
                                        <span className="flex items-center gap-3"><FileUser size={20} /> resume</span>
                                    </RollingLink>
                                </div>
                            </div>
                        </div>
                    </FadeInItem>
                </FadeInStagger>

            </main>
        </Layout>
    );
}

import Navbar from '@/components/ui/Navbar';
import { Layout } from '@/components/ui/Layout';
import { getBlogPosts } from '@/lib/data';
import { FadeIn } from '@/components/ui/FadeIn';
import { BlogList } from '@/components/sections/BlogList';

export default async function Blog() {
    const posts = await getBlogPosts();

    return (
        <Layout>
            <Navbar />
            <main className="max-w-3xl mx-auto pt-8 md:pt-20 pb-32">
                <FadeIn>
                    <h1 className="text-3xl font-bold text-zinc-100 mb-12 lowercase tracking-tight">blog</h1>
                </FadeIn>

                <BlogList posts={posts} />
            </main>
        </Layout>
    );
}

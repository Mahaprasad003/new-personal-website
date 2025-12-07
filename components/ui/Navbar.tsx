'use client';
import { usePathname } from 'next/navigation';
import { RollingLink } from './RollingLink';

export default function Navbar() {
    const pathname = usePathname();
    const links = [
        { name: 'about', path: '/' },
        { name: 'now', path: '/now' },
        { name: 'projects', path: '/projects' },
        { name: 'blog', path: '/blog' },
    ];

    return (
        <nav className="py-12 mb-12">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className="flex gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.path;

                        return (
                            <RollingLink
                                key={link.path}
                                href={link.path}
                                className={`text-xl ${isActive ? 'text-foreground font-medium' : 'text-zinc-500'}`}
                                height="28px"
                            >
                                {link.name}
                            </RollingLink>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

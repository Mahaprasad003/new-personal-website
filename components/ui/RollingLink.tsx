import Link from 'next/link';
import { ReactNode } from 'react';

interface RollingLinkProps {
    href: string;
    children: ReactNode; // We'll duplicate this whole node for the roll
    target?: string;
    className?: string; // Base classes for the link (colors, spacing)
    height?: string; // Height of the container, defaults to 24px
}

export function RollingLink({
    href,
    children,
    target,
    className = '',
    height = '24px'
}: RollingLinkProps) {
    return (
        <Link
            href={href}
            target={target}
            className={`relative overflow-hidden group block ${className}`}
            style={{ height }}
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                <div className="flex items-center" style={{ height }}>
                    {children}
                </div>
                <div className="flex items-center text-foreground" style={{ height }}>
                    {children}
                </div>
            </div>
        </Link>
    );
}

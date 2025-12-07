import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
    return (
        <div className={`min-h-screen px-6 md:px-12 transition-colors duration-500 ${className}`}>
            {children}
        </div>
    );
}

'use client';

import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Lerp: 0.1 is standard, lower is "heavier", higher is snappier.
    // Duration: 1.2s is a good middle ground for "premium" feel.
    const lenisOptions = {
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children as any}
        </ReactLenis>
    );
}

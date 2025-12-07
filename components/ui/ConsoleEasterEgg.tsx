'use client';

import { useEffect } from 'react';

export function ConsoleEasterEgg() {
    useEffect(() => {
        // ASCII Art for "HIRING?"
        console.log(`
%c
  _   _ ___ ____ ___ _   _  ____ ___ 
 | | | |_ _|  _ \\_ _| \\ | |/ ___|__ \\
 | |_| || || |_) | ||  \\| | |  _  / /
 |  _  || ||  _ <| || |\\  | |_| ||_| 
 |_| |_|___|_| \\_\\___|_| \\_|\\____|(_) 
`, 'font-family: monospace; font-weight: bold; color: #ededed;');

        console.log(
            '%c{\n  "role": "AI Engineer & Data Scientist",\n  "email": "mahaprasad003@gmail.com",\n  "stack": ["PyTorch", "LLMs", "Transformers", "Computer Vision", "Agentic Workflows"]\n}',
            'color: #a1a1aa; font-family: monospace;'
        );
    }, []);

    return null;
}

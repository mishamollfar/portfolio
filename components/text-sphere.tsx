'use client';

import { useEffect } from 'react';
import TagCloud from 'TagCloud';
import useIsMobile from '../utils/useIsMobile';

export default function TextSphere() {
    const isMobile: boolean = useIsMobile();

    useEffect(() => {
        return () => {
            const container: string = '.tagcloud';

            const text: string[] = [
                'HTML',
                'CSS',
                'SASS',
                'JavaScript',
                'Angular 2+',
                'React',
                'Node.js',
                'Next.js',
                'MongoDB',
                'ES6',
                'GIT',
                'GITHUB',
                'Rxjs',
                'C++',
                'Python',
                'Pascal',
                '.pug',
                'Webpack',
                'npm',
                'VS Code',
                'WebStorm'
            ];

            const options = {
                radius: isMobile ? 150 : 300,
                maxSpeed: 'normal',
                initialSpeed: 'normal',
                keep: true,
            };

            TagCloud(container, text, options);
        }
    }, []);

    return (
        <div className='text-sphere flex relative top-0 w-full h-full items-center justify-center'>
            <span className='tagcloud text-xl font-medium tracking-wider text-cyan-300'></span>
        </div>
    );
}

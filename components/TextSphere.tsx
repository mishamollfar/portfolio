'use client';

import { useEffect } from 'react';
import TagCloud, { TagCloudOptions } from 'TagCloud';

export default function TextSphere() {
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
        'WebStorm',
    ];

    useEffect(() => {
        // @ts-ignore
        let elementSphere: InstanceType<typeof TagCloud>;
        if (!document) {
            return;
        }
        const container = document.querySelector('.tagcloud');

        if (!!container) {
            const options: TagCloudOptions = {
                radius: container.clientWidth / 2,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            };
            elementSphere = TagCloud([ container ], text, options);
        }
        return () => {
            elementSphere.destroy();
        }
    });

    return <span className="tagcloud text-xl font-medium tracking-wider text-cyan-300"
                 style={ { position: 'relative', 'width': '100%', height: '100%', maxWidth: '100%' } }/>;
}

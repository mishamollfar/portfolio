import {useEffect, useState} from 'react';

const useIsMobile = (breackpoint = 768) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handlePageResized = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handlePageResized);
            window.addEventListener('orientationchange', handlePageResized);
            window.addEventListener('load', handlePageResized);
            window.addEventListener('reload', handlePageResized);
        }
        return () => {
            window.removeEventListener('resize', handlePageResized);
            window.removeEventListener('orientationchange', handlePageResized);
            window.removeEventListener('load', handlePageResized);
            window.removeEventListener('reload', handlePageResized);
        };
    }, []);

    return (width < breackpoint);
}

export default useIsMobile;

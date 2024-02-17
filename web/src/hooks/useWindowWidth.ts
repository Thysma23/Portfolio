import { useState, useEffect } from 'react';

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        console.log('windowWidth :>> ', windowWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}

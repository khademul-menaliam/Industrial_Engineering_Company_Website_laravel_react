import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * ScrollToTop handles intelligent scroll restoration for React Router:
 * 1. When navigating to a new page via link/redirect (PUSH / REPLACE), it scrolls to the top (0, 0).
 * 2. When navigating via browser back/forward buttons (POP), it restores the previous scroll position.
 * 3. When an anchor hash is present, it scrolls to that element smoothly.
 */
export default function ScrollToTop() {
    const location = useLocation();
    const navType = useNavigationType();
    const positionsRef = useRef(new Map());

    // Disable default browser scroll restoration so it doesn't conflict with SPA state
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    // Continuously capture current scroll position for the current location key
    useEffect(() => {
        const handleScroll = () => {
            if (location.key) {
                positionsRef.current.set(location.key, window.scrollY);
                try {
                    sessionStorage.setItem(`ar_scroll_${location.key}`, window.scrollY.toString());
                } catch (e) {
                    // Ignore storage quota or disabled storage
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.key]);

    // Handle scroll on location change
    useLayoutEffect(() => {
        // 1. Handle anchor hash links (e.g. /page#detail)
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // 2. Handle Browser Back / Forward (POP)
        if (navType === 'POP') {
            let savedY = positionsRef.current.get(location.key);

            if (savedY === undefined) {
                try {
                    const stored = sessionStorage.getItem(`ar_scroll_${location.key}`);
                    if (stored !== null) {
                        savedY = parseInt(stored, 10);
                    }
                } catch (e) {}
            }

            if (typeof savedY === 'number' && !isNaN(savedY)) {
                // Use requestAnimationFrame and slight delay to ensure DOM layout has rendered
                requestAnimationFrame(() => {
                    window.scrollTo(0, savedY);
                });
                const timeoutId = setTimeout(() => {
                    window.scrollTo(0, savedY);
                }, 50);
                return () => clearTimeout(timeoutId);
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            // 3. Handle Normal Navigation (PUSH / REPLACE): Always scroll directly to top
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.search, location.hash, location.key, navType]);

    return null;
}

'use client'
import { useState, useEffect, useRef } from 'react';

const useInViewAnimation = (options = { threshold: 0.2 }, animateClass = 'slide-top') => {
    const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has already happened
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true); // Set true on first intersection
                }
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, hasAnimated]); // Include hasAnimated to avoid re-triggering the observer unnecessarily

    // Manage animation class based on hasAnimated instead of in-view state
    const animationClassName = `animate-div ${hasAnimated ? animateClass : `${animateClass}-pre`}`;

    return [ref, animationClassName];
};

export default useInViewAnimation;

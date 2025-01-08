'use client';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ targetValue = 0, startValue = 0, duration = 1400 }) => {
  const [currentValue, setCurrentValue] = useState(startValue);
  const counterRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue(targetValue, duration);
            observer.unobserve(entry.target); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [targetValue, duration]);

  const animateValue = (target, duration) => {
    const start = startValue;
    const steps = Math.abs(target - start); // Total number of steps
    if (steps === 0) return; // Avoid division by zero

    const stepTime = Math.max(duration / steps, 10); // Ensure a minimum step time of 10ms
    let current = start;

    timerRef.current = setInterval(() => {
      current += (target > start ? 1 : -1); // Increment or decrement based on direction
      setCurrentValue(current);

      if ((target > start && current >= target) || (target < start && current <= target)) {
        clearInterval(timerRef.current); // Stop the timer when the target is reached
        setCurrentValue(target); // Ensure exact target value is set
      }
    }, stepTime);
  };

  return <span ref={counterRef}>{currentValue}</span>;
};

export default Counter;

import confetti from "canvas-confetti";
import { useEffect, useCallback } from "react";

export const ConfettiLayer = () => {
    const fireConfetti = useCallback(() => {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            zIndex: 100,
        };

        const fire = (particleRatio: number, opts: confetti.Options) => {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio),
            });
        };

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
            colors: ['#FEC5BB', '#FCD5CE'],
            shapes: ['heart'] as any
        });

        fire(0.2, {
            spread: 60,
            colors: ['#FAE1DD', '#ffffff'],
            shapes: ['star']
        });

        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
            colors: ['#F8EDEB'],
            shapes: ['heart'] as any
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
            colors: ['#FEC5BB'],
            shapes: ['star']
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 45,
            colors: ['#ffffff'],
            shapes: ['heart'] as any
        });
    }, []);

    useEffect(() => {
        // Initial burst on load
        setTimeout(() => fireConfetti(), 500);
        setTimeout(() => fireConfetti(), 1500);

        // Random intermittent bursts
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                confetti({
                    particleCount: 50,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#FEC5BB', '#FCD5CE', '#ffffff'],
                    shapes: ['heart'] as any
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [fireConfetti]);

    return null;
};

import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { siteConfig } from "../../config/site";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
}

export const useCountdown = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });

    useEffect(() => {
        const target = new Date(siteConfig.targetDate);

        const calculateTimeLeft = () => {
            const now = new Date();
            const totalSeconds = Math.max(0, differenceInSeconds(target, now));

            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft({ days, hours, minutes, seconds, totalSeconds });
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, []);

    return timeLeft;
};

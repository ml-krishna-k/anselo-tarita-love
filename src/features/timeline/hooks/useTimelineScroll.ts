import { useInView } from "react-intersection-observer";

export const useTimelineScroll = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the item is visible
        triggerOnce: true, // Only animate once
        rootMargin: "-50px 0px", // Offset slightly
    });

    return { ref, inView };
};

import { motion } from "framer-motion";
import type { TimelineEvent } from "../../../types/timeline";
import { useTimelineScroll } from "../hooks/useTimelineScroll";
import { animations } from "../../../lib/animations";

interface TimelineItemProps {
    event: TimelineEvent;
    isLeft: boolean;
}

export const TimelineItem = ({ event, isLeft }: TimelineItemProps) => {
    const { ref, inView } = useTimelineScroll();

    const isEmotional = event.highlight;

    return (
        <div
            ref={ref}
            className={`flex md:justify-between items-center w-full mb-16 relative ${isLeft ? "md:flex-row-reverse" : "md:flex-row"
                }`}
        >
            {/* Center Line Dot with pulse for highlights */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-4 h-4 rounded-full border-4 border-pearl shadow-md transition-all duration-500 ${event.highlight ? "bg-rose scale-125 animate-pulse" : "bg-rose/60"}`}></div>
            </div>

            {/* Spacer for other side (desktop only) */}
            <div className="hidden md:block w-5/12"></div>

            {/* Content Card */}
            <motion.div
                initial={isLeft ? animations.slideInLeft.initial : animations.slideInRight.initial}
                animate={inView ? (isLeft ? animations.slideInLeft.animate : animations.slideInRight.animate) : {}}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                whileHover={animations.cardHover}
                className={`w-full md:w-5/12 relative overflow-hidden rounded-2xl border transition-all duration-500 group ${isEmotional
                    ? "bg-rose/10 border-rose/30 shadow-[0_0_30px_rgba(252,213,206,0.3)]"
                    : "bg-white/40 border-white/50 shadow-sm backdrop-blur-md"
                    }`}
            >
                {/* Optional Background Image Overlay */}
                {event.image && (
                    <div className="absolute inset-0 z-0">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-white/10" />
                    </div>
                )}

                <div className="relative z-10 p-6 md:p-8">
                    {/* Media render */}
                    {event.media && event.media.type === 'video' && (
                        <div className="mb-4 rounded-xl overflow-hidden shadow-inner bg-black/5">
                            <video autoPlay loop muted playsInline className="w-full max-h-60 object-cover">
                                <source src={event.media.url} type="video/mp4" />
                            </video>
                        </div>
                    )}
                    {event.media && event.media.type === 'image' && (
                        <div className="mb-4 rounded-xl overflow-hidden shadow-sm">
                            <img src={event.media.url} alt={event.title} className="w-full max-h-60 object-cover" />
                        </div>
                    )}

                    <div className="flex justify-between items-start mb-4">
                        {event.highlight && (
                            <span className="text-xl animate-bounce">❤️</span>
                        )}
                    </div>

                    <h3 className={`mb-3 text-2xl md:text-3xl font-heading leading-tight ${event.highlight ? "text-charcoal drop-shadow-sm" : "text-charcoal"}`}>
                        {event.title}
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-charcoal/80 font-body">
                        {event.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

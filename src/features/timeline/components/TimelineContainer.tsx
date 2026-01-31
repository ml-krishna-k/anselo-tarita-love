import type { TimelineEvent } from "../../../types/timeline";
import { TimelineItem } from "./TimelineItem";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { animations } from "../../../lib/animations";

interface TimelineContainerProps {
    events: TimelineEvent[];
}

export const TimelineContainer = ({ events }: TimelineContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    let lastSection = "";

    return (
        <div ref={containerRef} className="relative w-full max-w-5xl px-4 py-12 mx-auto">
            {/* Floating Particles (Simulated) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-1/4 left-10 w-2 h-2 bg-rose/40 rounded-full animate-pulse blur-[1px]" />
                <div className="absolute top-3/4 right-20 w-3 h-3 bg-blush/40 rounded-full animate-bounce blur-[2px]" />
            </div>

            {/* Scroll Progress Indicator - Fixed Bottom Right */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-rose to-blush z-50 origin-left"
            />

            {/* Central Vertical Line (Parallax) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose/10 transform md:-translate-x-1/2" />
            <motion.div
                style={{ height: lineHeight, opacity }}
                className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-rose via-blush to-transparent transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(252,213,206,0.8)]"
            />

            <div className="flex flex-col space-y-12 relative z-10">
                {events.map((event, index) => {
                    const isNewSection = event.section !== lastSection;
                    lastSection = event.section;

                    return (
                        <div key={event.id}>
                            {isNewSection && (
                                <motion.div
                                    variants={animations.chapterReveal}
                                    initial="initial"
                                    whileInView="whileInView"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-col items-center justify-center my-24 relative z-10 text-center"
                                >
                                    <h2 className="text-4xl md:text-6xl font-heading text-charcoal/80 mb-2 italic">
                                        Chapter {["One", "Two", "Three"]["SECOND_CHANCE,LOVE_CONFESSION,LIFE_TOGETHER".split(",").indexOf(event.section)]}
                                    </h2>
                                    <div className="px-8 py-2 bg-white/60 border border-rose/20 rounded-full backdrop-blur-sm shadow-sm">
                                        <span className="text-xs font-bold tracking-[0.3em] text-charcoal/60 uppercase">
                                            {event.section.replace(/_/g, " ")}
                                        </span>
                                    </div>
                                    <div className="w-[1px] h-16 bg-gradient-to-b from-rose/50 to-transparent mt-4" />
                                </motion.div>
                            )}
                            <TimelineItem event={event} isLeft={index % 2 !== 0} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

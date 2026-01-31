import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "./useCountdown";
import { getDaysTogether } from "../../config/site";
import { useState } from "react";

export const CountdownWidget = () => {
    const { days, hours, minutes, seconds, totalSeconds } = useCountdown();
    const daysTogether = getDaysTogether();
    const [isExpanded, setIsExpanded] = useState(false);

    // If countdown is finished (or negative), handle appropriately (Phase 7 idea)
    // For now, let's show 0s if passed.

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-2xl w-72 mb-2"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal/60">Until Forever</h3>
                            <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                        </div>

                        <div className="grid grid-cols-4 gap-2 text-center mb-6">
                            <TimeBlock value={days} label="Days" />
                            <TimeBlock value={hours} label="Hrs" />
                            <TimeBlock value={minutes} label="Mins" />
                            <TimeBlock value={seconds} label="Secs" />
                        </div>

                        <div className="pt-4 border-t border-charcoal/10 text-center">
                            <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-1">We've been together</p>
                            <p className="text-xl font-heading text-rose">{daysTogether} Days</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-md border border-white/60 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
                <div className="relative">
                    <span className="text-xl">⏳</span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose rounded-full border-2 border-white animate-pulse" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50">Countdown</span>
                    <span className="text-sm font-bold text-charcoal font-heading min-w-[80px]">
                        {totalSeconds > 0 ? `${days}d ${hours}h ${minutes}m` : "It's Time!"}
                    </span>
                </div>
            </motion.button>
        </div>
    );
};

const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-2 bg-pearl/30 rounded-lg">
        <span className="text-lg font-bold text-charcoal font-heading leading-none mb-1">
            {value.toString().padStart(2, '0')}
        </span>
        <span className="text-[9px] uppercase font-medium text-charcoal/40">{label}</span>
    </div>
);

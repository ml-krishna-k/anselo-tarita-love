import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "../../../types/gallery";
import { format } from "date-fns";
import { useEffect } from "react";

interface LightboxProps {
    item: GalleryItem | null;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export const Lightbox = ({ item, onClose, onNext, onPrev }: LightboxProps) => {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        if (item) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [item, onClose, onNext, onPrev]);

    if (!item) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-xl p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()} // Prevent close on content click
                    className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                    >
                        ✕
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-2/3 h-[50vh] md:h-auto bg-black relative flex items-center justify-center">
                        <img
                            src={item.src}
                            alt={item.caption}
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Nav Buttons (Overlay) */}
                        <button
                            onClick={onPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-4xl hover:text-white transition-colors"
                        >
                            ‹
                        </button>
                        <button
                            onClick={onNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 text-4xl hover:text-white transition-colors"
                        >
                            ›
                        </button>
                    </div>

                    {/* Info Section */}
                    <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
                        <div className="mb-6">
                            <span className={`inline-block px-3 py-1 mb-2 text-xs font-bold tracking-widest uppercase rounded-full ${item.mood === "romantic" ? "bg-rose text-white" : "bg-pearl text-charcoal/60"
                                }`}>
                                {item.storyRef}
                            </span>
                            <span className="block text-sm text-charcoal/40 font-body uppercase tracking-wider mb-1">
                                {format(new Date(item.date), "MMMM d, yyyy")}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading text-charcoal leading-tight">
                                {item.caption}
                            </h2>
                        </div>

                        <p className="text-charcoal/70 font-body leading-relaxed text-sm md:text-base">
                            A beautiful moment frozen in time. This memory holds a special place in our story.
                        </p>

                        {/* Mood Indicator */}
                        <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center gap-2">
                            <span className="text-xs text-charcoal/40 uppercase tracking-widest">Mood:</span>
                            <span className="text-sm font-medium capitalize text-charcoal/70">{item.mood}</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

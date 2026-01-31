
import { motion } from "framer-motion";
import { useMusicStore } from "../../store/useMusicStore";

export const MusicToggle = () => {
    const { isPlaying, setIsPlaying, isMuted, toggleMute } = useMusicStore();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">


            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleMute()}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-center text-charcoal hover:text-rose transition-colors relative"
            >
                {/* Animated Ripple when playing */}
                {isPlaying && !isMuted && (
                    <span className="absolute inset-0 rounded-full border border-rose/50 animate-ping opacity-75"></span>
                )}

                <span className="text-xl relative z-10">{isMuted ? "🔇" : "🎵"}</span>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-charcoal text-white shadow-lg flex items-center justify-center text-sm"
            >
                {isPlaying ? "❚❚" : "▶"}
            </motion.button>
        </div>
    );
};

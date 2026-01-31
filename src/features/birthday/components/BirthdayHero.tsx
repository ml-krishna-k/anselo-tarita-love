import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import taritaImage from "../../../assets/images/gallery/Birthday pic aug 3.JPG";

export const BirthdayHero = () => {
    const handleTap = (e: React.MouseEvent) => {
        // Mini burst at click position
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        confetti({
            particleCount: 50,
            spread: 70,
            origin: { x, y },
            colors: ['#ffffff', '#FEC5BB'],
            shapes: ['star', 'circle'],
            disableForReducedMotion: true,
            zIndex: 200
        });
    };

    return (
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 z-10 space-y-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-rose/50 shadow-[0_0_40px_rgba(255,197,187,0.3)] mb-4"
            >
                <img src={taritaImage} alt="Birthday Girl" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative"
            >
                {/* Glow Effect Behind Text */}
                <div className="absolute inset-0 bg-rose/20 blur-[80px] rounded-full animate-pulse" />

                <h1 className="relative text-5xl md:text-7xl lg:text-9xl font-heading text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-2 leading-tight">
                    Happy Birthday
                </h1>
                <h2 className="relative text-4xl md:text-6xl font-serif italic text-blush drop-shadow-md">
                    My Queen, Tarita
                </h2>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTap}
                className="mt-8 px-10 py-4 bg-rose text-white rounded-full font-bold tracking-widest uppercase hover:bg-blush transition-all shadow-lg hover:shadow-rose/50"
            >
                Make a Wish ✨
            </motion.button>
        </div>
    );
};

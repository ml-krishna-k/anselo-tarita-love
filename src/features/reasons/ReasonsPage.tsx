
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reasons } from "../../data/reasons";
import { Button } from "../../components/ui/Button";

import funny1 from "../../assets/images/gallery/funny pic 1.JPG";
import funny2 from "../../assets/images/gallery/funny pic 2.JPG";
import funny3 from "../../assets/images/gallery/funny pic 3.jpg";

const FloatingBubbles = () => {
    // Reduced count for better performance on mobile
    const images = [funny1, funny2, funny3, funny1, funny2];
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full z-0">
            {images.map((img, i) => (
                <motion.div
                    key={i}
                    className="absolute w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden opacity-60"
                    initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
                    animate={{
                        y: -150,
                        x: Math.random() * window.innerWidth,
                        rotate: 360
                    }}
                    transition={{
                        duration: 8 + Math.random() * 7, // Faster
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10 // Randomized start
                    }}
                    style={{ left: `${Math.random() * 100}%` }} // Fully random positions
                >
                    <img src={img} alt="Funny moment" className="w-full h-full object-cover" />
                </motion.div>
            ))}
        </div>
    );
};

export default function ReasonsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReason = () => {
        setCurrentIndex((prev) => (prev + 1) % reasons.length);
    };

    const prevReason = () => {
        setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <FloatingBubbles />
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-rose/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-blush/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 relative z-10"
            >
                <h1 className="text-4xl md:text-5xl font-heading text-charcoal mb-4">Reasons Why I Love You</h1>
                <p className="text-charcoal/60 font-body italic">Just a few of the million reasons...</p>
            </motion.div>

            <div className="relative w-full max-w-xl h-64 md:h-80 flex items-center justify-center perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, rotateX: -90, y: 50 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, rotateX: 90, y: -50 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl flex items-center justify-center p-8 md:p-12 text-center"
                    >
                        <span className="text-6xl absolute -top-6 -left-6 opacity-20 rotate-12">❝</span>
                        <p className="text-2xl md:text-3xl font-heading text-charcoal leading-relaxed">
                            {reasons[currentIndex]}
                        </p>
                        <span className="text-6xl absolute -bottom-6 -right-6 opacity-20 rotate-12">❞</span>

                        <div className="absolute bottom-4 right-4 text-xs font-mono text-charcoal/30">
                            {currentIndex + 1} / {reasons.length}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-6 mt-12 relative z-10">
                <Button variant="outline" onClick={prevReason}>
                    Previous
                </Button>
                <Button onClick={nextReason}>
                    Next Reason
                </Button>
            </div>
        </div>
    );
}

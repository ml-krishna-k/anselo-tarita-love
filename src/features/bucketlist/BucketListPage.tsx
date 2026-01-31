
import { useState } from "react";
import { motion } from "framer-motion";
import { bucketList } from "../../data/bucketlist";
import { cn } from "../../lib/cn";

import funny1 from "../../assets/images/gallery/funny pic 1.JPG";
import funny2 from "../../assets/images/gallery/funny pic 2.JPG";
import funny3 from "../../assets/images/gallery/funny pic 3.jpg";

const FloatingBubbles = () => {
    const images = [funny1, funny2, funny3, funny1, funny2, funny3, funny1, funny2, funny3];
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
            {images.map((img, i) => (
                <motion.div
                    key={i}
                    className="absolute w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden opacity-60 z-0"
                    initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
                    animate={{
                        y: -150,
                        x: Math.random() * window.innerWidth,
                        rotate: 360
                    }}
                    transition={{
                        duration: 8 + Math.random() * 7,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                    style={{ left: `${Math.random() * 100}%` }}
                >
                    <img src={img} alt="Funny moment" className="w-full h-full object-cover" />
                </motion.div>
            ))}
        </div>
    );
};

export default function BucketListPage() {
    const [items, setItems] = useState(bucketList);

    const toggleItem = (id: string) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    return (
        <div className="min-h-screen p-4 md:p-8 relative">
            <FloatingBubbles />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-heading text-charcoal mb-4">Our Bucket List</h1>
                <p className="text-charcoal/60 font-body italic">Adventures we've had and dreams yet to come.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => toggleItem(item.id)}
                        className={cn(
                            "relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden group hover:shadow-lg",
                            item.completed
                                ? "bg-rose/5 border-rose/20"
                                : "bg-white/40 border-white/40 hover:bg-white/60"
                        )}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className={cn(
                                "text-xl font-heading transition-all duration-300",
                                item.completed ? "text-rose line-through opacity-70" : "text-charcoal"
                            )}>
                                {item.title}
                            </h3>
                            <div className={cn(
                                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                item.completed ? "bg-rose border-rose" : "border-charcoal/30 group-hover:border-rose/50"
                            )}>
                                {item.completed && (
                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </motion.svg>
                                )}
                            </div>
                        </div>

                        <p className={cn(
                            "text-sm font-body leading-relaxed transition-opacity",
                            item.completed ? "text-rose/50" : "text-charcoal/70"
                        )}>
                            {item.description}
                        </p>

                        {/* Decoration */}
                        <div className={cn(
                            "absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-rose/10 to-transparent rounded-tl-full transition-transform duration-500",
                            item.completed ? "scale-100" : "scale-0 group-hover:scale-75"
                        )} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

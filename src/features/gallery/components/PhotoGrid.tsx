import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Load all images from the couple folder
const imagesGlob = import.meta.glob('../../../assets/images/couple/*.{jpg,JPG,png,PNG,heic,HEIC,jpeg,JPEG}', {
    eager: true,
    import: 'default'
});

// Sort images naturally (1, 2, 10 instead of 1, 10, 2)
const photoList = Object.entries(imagesGlob)
    .sort(([a], [b]) => {
        const nameA = a.split('/').pop() || '';
        const nameB = b.split('/').pop() || '';
        return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
    })
    .map(([, url]) => url as string);

export const PhotoGrid = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4 px-4">
                {photoList.map((src, index) => (
                    <motion.div
                        key={src}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        className="break-inside-avoid mb-4 cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <div className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={src}
                                alt={`Couple Memory ${index + 1}`}
                                loading="lazy"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle overlay for vibe */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Full screen memory"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 p-2 text-charcoal/60 hover:text-charcoal transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};


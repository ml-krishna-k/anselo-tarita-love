import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all images eagerly from the couple folder
const imagesGlob = import.meta.glob('../assets/images/couple/*.{jpg,JPG,png,PNG,heic,HEIC,jpeg,JPEG}', {
    eager: true,
    import: 'default',
});

// Sort images naturally (1, 2, 10 instead of 1, 10, 2)
const images = Object.entries(imagesGlob)
    .sort(([a], [b]) => {
        // Extract filename for better sorting
        const nameA = a.split('/').pop() || '';
        const nameB = b.split('/').pop() || '';
        return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
    })
    .map(([, url]) => url as string);

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen py-24 px-4 sm:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-heading text-charcoal mb-4">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush to-rose">Memories</span>
                </h1>
                <p className="text-charcoal/60 font-body text-lg max-w-2xl mx-auto">
                    Capturing every moment of our journey together.
                </p>
            </motion.div>

            {images.length === 0 ? (
                <div className="text-center text-charcoal/50 py-20 font-heading text-xl">
                    No photos found in the gallery folder.
                </div>
            ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="break-inside-avoid relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-lg bg-white"
                            onClick={() => setSelectedImage(src)}
                        >
                            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 z-10" />
                            <img
                                src={src}
                                alt={`Couple memory ${index + 1}`}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            )}

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
                            onClick={(e) => e.stopPropagation()} // Allow clicking image without closing? No, usually click anywhere to close is better on mobile, or click image to do nothing. Let's let click anywhere close it for simplicity.
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
        </div>
    );
}


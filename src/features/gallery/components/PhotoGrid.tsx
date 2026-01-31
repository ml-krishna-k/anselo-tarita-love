import { motion } from "framer-motion";

// Load all images from the couple folder
const images = import.meta.glob('../../../assets/images/couple/*.(jpg|JPG|png|PNG|heic|HEIC)', { eager: true, query: '?url', import: 'default' });

export const PhotoGrid = () => {
    // Convert generic object to array of URLs
    const photoList = Object.values(images) as string[];

    return (
        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4 px-4">
            {photoList.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="break-inside-avoid mb-4"
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
    );
};

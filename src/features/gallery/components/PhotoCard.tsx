import { motion } from "framer-motion";
import type { GalleryItem } from "../../../types/gallery";
import { format } from "date-fns";

interface PhotoCardProps {
    item: GalleryItem;
    onClick: (item: GalleryItem) => void;
}

export const PhotoCard = ({ item, onClick }: PhotoCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className={`relative mb-6 break-inside-avoid rounded-2xl overflow-hidden cursor-zoom-in group ${item.aspectRatio === "portrait" ? "h-[400px]" :
                    item.aspectRatio === "landscape" ? "h-[250px]" : "h-[300px]"
                }`}
            onClick={() => onClick(item)}
        >
            <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1">
                    {format(new Date(item.date), "MMM yyyy")}
                </span>
                <h3 className="text-white font-heading text-xl">{item.caption}</h3>
            </div>

            {/* Pin/Like Indicator (Pinterest style) */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-rose hover:text-white transition-colors">
                    ♥
                </div>
            </div>
        </motion.div>
    );
};

import type { GalleryItem } from "../types/gallery";

// Using query param for Vite asset handling
const images = import.meta.glob('../assets/images/gallery/*.(jpg|JPG|png|PNG|heic|HEIC)', { eager: true, query: '?url', import: 'default' });

export const galleryData: GalleryItem[] = Object.entries(images)
    .filter(([path]) => {
        const lowerPath = path.toLowerCase();
        // Strictly include only images with "couple pic" in the name
        return lowerPath.includes("couple pic");
    })
    .map(([path, url], index) => {
        // Extract filename for caption
        const filename = path.split('/').pop()?.split('.')[0] || "Memory";
        // Beautify filename
        const caption = filename.replace(/[-_]/g, ' ').replace(/([A-Z])/g, ' $1').trim();

        return {
            id: String(index + 1),
            src: url as string,
            caption: caption,
            date: "2024", // Default year, can be refined if filename has date
            mood: "happy",
            aspectRatio: index % 3 === 0 ? "landscape" : index % 3 === 1 ? "portrait" : "square", // randomized for now
        };
    });

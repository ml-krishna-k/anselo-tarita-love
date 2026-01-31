export interface GalleryItem {
    id: string;
    src: string;
    caption: string;
    date: string; // YYYY-MM-DD
    storyRef?: string;
    mood: "happy" | "nostalgic" | "healing" | "romantic";
    aspectRatio: "portrait" | "landscape" | "square";
}

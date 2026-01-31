export type TimelineSection = "SECOND_CHANCE" | "LOVE_CONFESSION" | "LIFE_TOGETHER";

export interface TimelineEvent {
    id: string;
    date: string; // YYYY-MM-DD
    title: string;
    description: string;
    section: TimelineSection;
    highlight?: boolean;
    image?: string;
    media?: {
        type: "video" | "image";
        url: string;
    };
}

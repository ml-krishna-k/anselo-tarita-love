import type { TimelineEvent } from "../types/timeline";

export const timelineData: TimelineEvent[] = [
    // SECTION: SECOND CHANCE
    {
        id: "1",
        date: "2023-01-15",
        title: "A Second Chance",
        description: "After years apart, paths crossed again unexpectedly. A simple message sparked a conversation that would change everything.",
        section: "SECOND_CHANCE",
        highlight: true,
        media: { type: "video", url: "https://drive.google.com/file/d/1VZgbE_hJ6KurZR7wqNYv57KyD94igxeW/preview" } // First video of us
    },
    {
        id: "2",
        date: "2023-02-01",
        title: "The 47D Bus Ride",
        description: "That ordinary bus ride became extraordinary. Sitting next to you, the world faded away.",
        section: "SECOND_CHANCE",
        media: { type: "video", url: "https://drive.google.com/file/d/1BU7_t0AANIUWE5DZ6UW0HlT9qkioVBmr/preview" } // 47D Bus Ride
    },

    // SECTION: LOVE CONFESSION
    {
        id: "3",
        date: "2023-03-10",
        title: "The Confession",
        description: "Under the stars, feelings that were held back for so long were finally spoken. 'I never stopped loving you.'",
        section: "LOVE_CONFESSION",
        highlight: true,
    },
    {
        id: "4",
        date: "2023-03-20",
        title: "The Auto Ride",
        description: "Wind in our hair, chaos of the city around us, but all I could focus on was your smile in that auto.",
        section: "LOVE_CONFESSION",
        media: { type: "video", url: "https://drive.google.com/file/d/1NBIyxPgOIL9kpUnpgFh7sTEuNiScixjE/preview" } // Auto Ride
    },

    // SECTION: LIFE TOGETHER
    {
        id: "5",
        date: "2023-06-20",
        title: "Building a Life",
        description: "Moving cities, finding a new home, and the joy of waking up next to each other every day.",
        section: "LIFE_TOGETHER",
        media: { type: "video", url: "https://drive.google.com/file/d/1SJGPheh_FuBWHo3LL7EcUPxlrB8ROIbh/preview" } // Being together edit
    },
    {
        id: "6",
        date: "2024-02-14",
        title: "Everything Comes Full Circle",
        description: "Recreating our first memories, proving that my love for you has only grown deeper with time.",
        section: "LIFE_TOGETHER",
        highlight: true,
        media: { type: "video", url: "https://drive.google.com/file/d/18mlxqHe1OL0MduxY0jBwMT6TWiOg4_0J/preview" } // First video recreation
    },
];

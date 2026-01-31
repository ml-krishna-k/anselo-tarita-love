import type { TimelineEvent } from "../types/timeline";
import firstVideo from "../assets/videos/First video of us.MP4";
import busVideo from "../assets/videos/47D Bus Ride video.MP4";
import autoVideo from "../assets/videos/Autoride Video.MP4";
import recreationVideo from "../assets/videos/first video recreation.MP4";

export const timelineData: TimelineEvent[] = [
    // SECTION: SECOND CHANCE
    {
        id: "1",
        date: "2023-01-15",
        title: "A Second Chance",
        description: "After years apart, paths crossed again unexpectedly. A simple message sparked a conversation that would change everything.",
        section: "SECOND_CHANCE",
        highlight: true,
        media: { type: "video", url: firstVideo }
    },
    {
        id: "2",
        date: "2023-02-01",
        title: "The 47D Bus Ride",
        description: "That ordinary bus ride became extraordinary. Sitting next to you, the world faded away.",
        section: "SECOND_CHANCE",
        media: { type: "video", url: busVideo }
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
        media: { type: "video", url: autoVideo }
    },

    // SECTION: LIFE TOGETHER
    {
        id: "5",
        date: "2023-06-20",
        title: "Building a Life",
        description: "Moving cities, finding a new home, and the joy of waking up next to each other every day.",
        section: "LIFE_TOGETHER",
    },
    {
        id: "6",
        date: "2024-02-14",
        title: "Everything Comes Full Circle",
        description: "Recreating our first memories, proving that my love for you has only grown deeper with time.",
        section: "LIFE_TOGETHER",
        highlight: true,
        media: { type: "video", url: recreationVideo }
    },
];

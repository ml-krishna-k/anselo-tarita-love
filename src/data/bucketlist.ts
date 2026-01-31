
export interface BucketListItem {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    image?: string;
}

export const bucketList: BucketListItem[] = [
    {
        id: "1",
        title: "See the Northern Lights",
        description: "Travel to Iceland or Norway and watch the aurora borealis together.",
        completed: false
    },
    {
        id: "2",
        title: "Adopt a Pet",
        description: "Get a puppy or kitten and raise them together.",
        completed: false
    },
    {
        id: "3",
        title: "Learn a New Language",
        description: "Take classes together and practice speaking to each other.",
        completed: false
    },
    {
        id: "4",
        title: "Road Trip Across the Country",
        description: "Pack the car and just drive, stopping wherever looks interesting.",
        completed: false
    },
    {
        id: "5",
        title: "Cook a Fancy Dinner",
        description: "Make a 5-course meal from scratch at home.",
        completed: true
    },
    {
        id: "6",
        title: "Go Skydiving",
        description: "Jump out of a plane together (or at least watch the other do it!).",
        completed: false
    },
    {
        id: "7",
        title: "Build a Pillow Fort",
        description: " spend the whole weekend inside watching movies.",
        completed: true
    },
    {
        id: "8",
        title: "Visit Paris",
        description: "Kiss under the Eiffel Tower.",
        completed: false
    }
];

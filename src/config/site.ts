import { differenceInDays } from "date-fns";

export const siteConfig = {
    title: "Anselo & Tarita",
    subtitle: "A Celebration of Love",
    startDate: "2023-06-30",
    endDate: "2026-02-19", // The target anniversary/wedding date
    targetDate: "2026-02-19T00:00:00",
    relationshipStartDate: "2023-06-30T00:00:00",
};

export const getDaysTogether = () => {
    return differenceInDays(new Date(), new Date(siteConfig.relationshipStartDate));
};

export const getDaysRemaining = () => {
    return differenceInDays(new Date(siteConfig.targetDate), new Date());
};

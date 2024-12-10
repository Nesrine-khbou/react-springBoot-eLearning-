// src/services/contentService.js

export const getTotalDuration = (contents) => {
    const totalMinutes = contents.reduce((total, item) => total + item.videoDuration, 0);

    if (totalMinutes === 0) {
        return "No duration available";
    }

    const hours = Math.floor(totalMinutes / 60); // Get the total hours
    const minutes = totalMinutes % 60; // Get the remaining minutes

    if (hours === 0) {
        return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    }

    if (minutes === 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""}`;
    }

    return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`;
};

// Filter contents by category
export const filterContentsByCategory = (contents, category) => {
    return contents.filter((content) => content.category === category);
};

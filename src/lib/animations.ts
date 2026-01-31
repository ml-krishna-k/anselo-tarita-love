export const animations = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6 },
    },
    slideInLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    slideInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    scaleUp: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
    },
    chapterReveal: {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" },
    },
    cardHover: {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 },
    },
};

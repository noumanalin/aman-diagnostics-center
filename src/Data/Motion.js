
export const once = false;  // fasle in development, true in produaction

export const zoomIn = {
  hidden: { scale: 0.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
}

export const fade = (direction, type, delay=0.01, duration) => ({
  hidden: {
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type, // "spring" or "tween"
      delay,
      duration: duration || 0.8,
      stiffness: 80,
      damping: 20,
      ease: "easeOut",
    },
  },
});


// variants={fadeInLine("left", 0.7)}
//  initial="hidden"
//  whileInView="show"
//  viewport={{ once, amount: 0.2 }}
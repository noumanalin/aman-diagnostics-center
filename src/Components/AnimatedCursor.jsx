import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedCursor = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Real mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Outer ring follows mouse
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Inner dot follows outer ring
  const dotX = useSpring(ringX, { stiffness: 40, damping: 15 });
  const dotY = useSpring(ringY, { stiffness: 40, damping: 15 });

  // Sizes (optional for radius control)
  const ringSize = 35;
  const dotSize = 8;

  // Scale animation on click
  const ringScale = useSpring(isClicked ? 2 : 1, {
    stiffness: 200,
    damping: 15,
  });

  const dotScale = useSpring(isClicked ? 1.5 : 1, {
    stiffness: 200,
    damping: 15,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleDown = () => setIsClicked(true);
    const handleUp = () => setIsClicked(false);

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-blue-700  "
        style={{
          width: ringSize,
          height: ringSize,
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-blue-700   "
        style={{
          width: dotSize,
          height: dotSize,
          x: dotX,
          y: dotY,
          scale: dotScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default AnimatedCursor;



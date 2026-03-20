import { motion } from "framer-motion";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const CustomCursor = () => {
  const { position, isPointer, isClicking } = useCustomCursor();

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.5 : isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-3 h-3 rounded-full bg-primary" />
      </motion.div>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.8 : 1,
          opacity: isClicking ? 0.3 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary/50" />
      </motion.div>
    </>
  );
};

export default CustomCursor;

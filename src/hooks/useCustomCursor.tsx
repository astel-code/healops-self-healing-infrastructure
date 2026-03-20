import { useEffect, useState } from "react";

export const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);
    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computed = window.getComputedStyle(target);
      setIsPointer(computed.cursor === "pointer" || target.closest("a,button,[role='button']") !== null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkPointer);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkPointer);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return { position, isPointer, isClicking };
};

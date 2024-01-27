import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const useFollowPointer = (
  ref: React.MutableRefObject<HTMLElement | null>
): Position => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener("mousemove", updatePosition);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", updatePosition);
      }
    };
  }, [ref]);

  return position;
};

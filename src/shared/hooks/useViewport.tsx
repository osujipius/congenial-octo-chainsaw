import { useState, useEffect } from "react";

export const useViewport = (): number => {
  const [viewport, setViewport] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewport(window.innerWidth);
    }

    const handleResize = () => {
      setViewport(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
};

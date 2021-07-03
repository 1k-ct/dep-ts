import { useState, useEffect } from "react";
// interface WindowSize {
//   width: number;
//   height: number;
// }
const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: windWidth, innerHeight: windHeight } = window;
    return {
      windWidth,
      windHeight,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;

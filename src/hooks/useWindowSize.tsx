import React, { useState, useEffect, createContext, useContext } from "react";


type windowSizeType = { width: number, height: number }
const WINDOW_INITIAL_STATE = { width: undefined, height: undefined }
const WindowSizeCtx = createContext<Partial<windowSizeType>>(WINDOW_INITIAL_STATE);

export const WindowSizeProvider: React.FC = ({ children }) => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<Partial<windowSizeType>>(WINDOW_INITIAL_STATE);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeCtx.Provider value={windowSize}>
      {children}
    </WindowSizeCtx.Provider>
  );
};

export const useWindowSize = () => {
  return useContext(WindowSizeCtx)
};

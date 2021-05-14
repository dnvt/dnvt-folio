
import React, { createContext, useContext } from "react";
import useDarkMode from "use-dark-mode";
import { useTheme, ThemeProvider } from "react-jss";
import { THEME } from "../utils/theme";

type Context = [boolean, Function?]
type Props = { children: JSX.Element }

const DarkModeCtx = createContext<Context>([false, () => { }]);

export function ColorTheme({ children }: Props) {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeCtx.Provider value={[false]}>
      <ThemeProvider theme={darkMode.value ? THEME.dark : THEME.light}>
        {children}
      </ThemeProvider>
    </DarkModeCtx.Provider>
  );
}

export function useDarkTheme() {
  return useContext(DarkModeCtx);
}

export default useTheme;
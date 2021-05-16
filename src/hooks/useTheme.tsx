
import React, { createContext, useContext } from "react"
import useDarkMode from "use-dark-mode"
import { useTheme, ThemeProvider } from "react-jss"
import { THEME } from "../utils/theme/theme"

type Context = [boolean, Function?] | boolean

const DarkModeCtx = createContext<Context>([false, () => { }])

export const ColorTheme: React.FC = ({ children }) => {
  const darkMode = useDarkMode(false, { storageKey: "null" })

  return (
    <DarkModeCtx.Provider value={false}>
      <ThemeProvider theme={darkMode.value ? THEME.dark : THEME.light}>
        {children}
      </ThemeProvider>
    </DarkModeCtx.Provider>
  )
}

export function useDarkTheme() {
  return useContext(DarkModeCtx)
}

export default useTheme
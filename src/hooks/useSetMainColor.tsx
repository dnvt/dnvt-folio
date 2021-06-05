import React, { useState, createContext, useContext } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../utils/theme/theme"

const MainColorCtx = createContext<any>(["", () => { }])

export const MainColorProvider: React.FC = ({ children }) => {
  const theme: Theme = useTheme()
  const [color, setColor] = useState(theme.text.hover)

  return (
    <MainColorCtx.Provider value={[color, setColor]}>
      {children}
    </MainColorCtx.Provider>
  )
}

export const useMainColor = () => {
  return useContext(MainColorCtx)
}

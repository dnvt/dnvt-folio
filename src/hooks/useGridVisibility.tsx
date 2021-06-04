import React, { useState, createContext, useContext } from "react"

type VisibilityType = any

const GridVisibilityCtx = createContext<VisibilityType>([false, () => { }])

export const GridVisibilityProvider: React.FC = ({ children }) => {
  const [visibility, setVisibility] = useState<Boolean>(false)

  return (
    <GridVisibilityCtx.Provider value={[visibility, setVisibility]}>
      {children}
    </GridVisibilityCtx.Provider>
  )
}

export const useGridVisibility = () => {
  return useContext(GridVisibilityCtx)
}

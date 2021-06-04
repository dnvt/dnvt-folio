import React, { useState, createContext, useContext, useEffect } from "react"

type VisibilityType = any

const MenuVisibilityCtx = createContext<VisibilityType>([false, () => { }])

export const MenuVisibilityProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Boolean>(false)

  useEffect(() => {
    setMenu(false)
    return () => {
      setMenu(false)
    }
  }, [])

  return (
    <MenuVisibilityCtx.Provider value={[menu, setMenu]}>
      {children}
    </MenuVisibilityCtx.Provider>
  )
}

export const useMenuVisibility = () => {
  return useContext(MenuVisibilityCtx)
}

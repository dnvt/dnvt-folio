import React, { useState, createContext, useContext } from "react"

const IntroTranstionCtx = createContext<any>(["", () => { }])

export const IntroTranstionProvider: React.FC = ({ children }) => {
  const [heroTransition, setHeroTransition] = useState(
    {
      homepage: true,
      usm_system: true,
      guidelines: true,
      matrix: true,
      branding: true,
      coverjs: true,
    })

  return (
    <IntroTranstionCtx.Provider value={[heroTransition, setHeroTransition]}>
      {children}
    </IntroTranstionCtx.Provider>
  )
}

export const useIntroTransition = () => {
  return useContext(IntroTranstionCtx)
}

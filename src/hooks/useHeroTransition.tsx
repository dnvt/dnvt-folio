import React, { useState, createContext, useContext } from "react"

const IntroTranstionCtx = createContext<any>(["", () => { }])

export const IntroTranstionProvider: React.FC = ({ children }) => {
  const [heroTransition, setHeroTransition] = useState(
    {
      homepage: true,
      guidelines: true,
      usm_system: true,
      airbus: true,
      siemens: true,
      telekom: true,
      matrix: true,
      branding: true,
      norse: true,
      elastic: true,
      waste: true,
      kipfit: true,
      mimi: true,
      stars: true,
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

import React, { lazy, Suspense, useEffect } from 'react'
import { useTheme } from 'theming'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useMainColor } from '../../hooks/useSetMainColor'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import { useIntroTransition } from '../../hooks/useHeroTransition'
import Introduction from './segments/Introduction'
import Container from '../../components/containers/Container'
import { Theme } from '../../utils/theme/theme'
import Spacer from '../../utils/spacer/Spacer'
import Grid from '../../utils/grids/Grid'
import Font from '../../utils/fonts/Font'

////////////////////////////////////////////////////////////////////////////////

const USMWork = lazy(() => import('./segments/USMWork'))
const PrivateWork = lazy(() => import('./segments/PrivateWork'))
const SelectedWork = lazy(() => import('./segments/SelectedWork'))
const PlayGround = lazy(() => import('./segments/Playground'))
const AboutSection = lazy(() => import('./segments/AboutSection'))

/**
 * Welcome to @dnvt/Guidelines!
 */
const Homepage: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  const [, setColor] = useMainColor()
  const [heroTransition, setHeroTransition] = useIntroTransition()

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, homepage: false } })
    setColor(theme.text.hover)
  }, [setColor, setHeroTransition, theme.text.hover])

  let spacer = <Spacer contained height={window.width > 768 ? 184 : 40} />

  console.log(heroTransition)
  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ transform: heroTransition.homepage ? "translateY(240px)" : "translateY(0px)", opacity: heroTransition.homepage ? 0 : 1, transition: "opacity .6s ease, transform .6s ease" }}>
        <Spacer contained height={104} />
        {window.width > 767 && <Spacer contained height={184} />}
        <div style={{ position: "relative", height: 0, transform: heroTransition.homepage ? "translateY(-80px)" : "translateY(0px)", transition: " transform .6s ease" }}>
          <Font type="hero">François</Font>
        </div>
        <Introduction />
        <Suspense fallback={<Container><Font type="text">Loading...</Font></Container>} >
          {spacer}
          <USMWork />
          <Spacer contained height={104} />
          <PrivateWork />
          <Spacer contained height={104} />
          <SelectedWork />
          {spacer}
          <div style={{ position: "relative" }}>
            <Font type="hero">Yeaaah</Font>
          </div>
          <PlayGround />
          <div style={{ position: "relative" }}>
            <Font type="hero" style={{ top: -200 }}>dnvt.me </Font>
          </div>
          {spacer}
          <AboutSection />
        </Suspense>
      </div>
    </DocumentSizeProvider>
  )
}

export default Homepage

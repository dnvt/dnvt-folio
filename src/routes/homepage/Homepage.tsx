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
// import Fontimation, { compensateFontimationHeight } from '../../utils/fonts/Fontimation'

////////////////////////////////////////////////////////////////////////////////

const USMWork = lazy(() => import('./segments/USMWork'))
const PrivateWork = lazy(() => import('./segments/PrivateWork'))
const SelectedWork = lazy(() => import('./segments/SelectedWork'))
const PlayGround = lazy(() => import('./segments/PlaygroundWork'))
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

  let spacer = <Spacer contained height={window.width > 767 ? 184 : 40} />

  console.log(heroTransition)
  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ transform: heroTransition.homepage ? "translateY(288px)" : "translateY(0px)", opacity: heroTransition.homepage ? 0 : 1, transition: "opacity .6s ease, transform .6s ease" }}>
        <Spacer contained height={104} />
        <Spacer contained height={184} />
        {/* <Font type="hero">François</Font> */}
        <Introduction />
        <Suspense fallback={<Container><Font type="text">Loading...</Font></Container>} >
          {spacer}
          <USMWork />
          <Spacer contained height={104} />
          <PrivateWork />
          <Spacer contained height={104} />
          <SelectedWork />
          {spacer}
          <PlayGround />
          {/* <Font type="hero">dnvt.me</Font> */}
          {spacer}
          <AboutSection />
        </Suspense>
      </div>
    </DocumentSizeProvider >
  )
}

export default Homepage

import React, { lazy, Suspense, useEffect } from 'react'
import Spacer from '../../utils/spacer/Spacer'
import Font from '../../utils/fonts/Font'
import Sidelines from '../../utils/sidelines/Sidelines'
import Grid from '../../utils/grids/Grid'
import { useTheme } from 'theming'
import { Theme } from '../../utils/theme/theme'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useMainColor } from '../../hooks/useSetMainColor'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import { useIntroTransition } from '../../hooks/useHeroTransition'
import Introduction from './segments/Introduction'
import Container from '../../components/containers/Container'

////////////////////////////////////////////////////////////////////////////////

const USMWork = lazy(() => import('./segments/USMWork'))
const PrivateWork = lazy(() => import('./segments/PrivateWork'))
const SelectedWork = lazy(() => import('./segments/SelectedWork'))
const PlayGround = lazy(() => import('./segments/Playground'))
const About = lazy(() => import('./segments/About'))

/**
 * Welcome to @dnvt/Guidelines!
 */
const Homepage: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  const [, setColor] = useMainColor()
  const [heroTransition, setHeroTransition] = useIntroTransition()

  let spacer = <Spacer contained height={window.width > 768 ? 184 : 40} />

  useEffect(() => {
    setHeroTransition({ homepage: false })
    setColor(theme.text.hover)
  }, [setColor, setHeroTransition, theme.text.hover])

  return (
    <DocumentSizeProvider>
      <Grid />
      <Sidelines />
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
          <About />
        </Suspense>
      </div>
    </DocumentSizeProvider>
  )
}

export default Homepage

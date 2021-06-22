import React, { lazy, Suspense, useEffect } from 'react'
import Section from './segments/Section'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import { useIntroTransition } from '../../hooks/useHeroTransition'
import UtilsSection from './segments/UtilsSection'
import Grid from '../../utils/grids/Grid'
import Spacer from '../../utils/spacer/Spacer'
import LoadingComponent from '../../utils/suspence/Loading'
import { useMainColor } from '../../hooks/useSetMainColor'
import { Theme } from '../../utils/theme/theme'
import { useTheme } from 'react-jss'

////////////////////////////////////////////////////////////////////////////////

const FontSection = lazy(() => import('./segments/FontSection'))
const NavigationSection = lazy(() => import('./segments/NavigationSection'))
const DeviceSection = lazy(() => import('./segments/DeviceSection'))
const CardSection = lazy(() => import('./segments/CardSection'))
const ImageSection = lazy(() => import('./segments/ImageSection'))

/**
 * Welcome to @dnvt/Guidelines!
 */
const Guidelines: React.FC = () => {
  const theme: Theme = useTheme()

  const [heroTransition, setHeroTransition] = useIntroTransition()
  const [, setColor] = useMainColor()

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, guidelines: false } })
    setColor(theme.text.hover)
  }, [setColor, setHeroTransition, theme.text.hover])

  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ transform: heroTransition.guidelines ? "translateY(240px)" : "translateY(0px)", opacity: heroTransition.guidelines ? 0 : 1, transition: "opacity .6s ease, transform .6s ease" }}>
        <Spacer contained height={104} />
        <Section title='Design Guidelines' value='Utility Section' />
        <UtilsSection />
        <Suspense fallback={<LoadingComponent />} >
          <Section value='Font Section' />
          <FontSection />
          <Section value='Navigation Section' />
          <NavigationSection />
          <Section value=' Device Section' />
          <DeviceSection />
          <Section value=' Image Section' />
          <ImageSection />
          <Section value=' Card Section' />
          <CardSection />
        </Suspense>
      </div>
    </DocumentSizeProvider>
  )
}

export default Guidelines

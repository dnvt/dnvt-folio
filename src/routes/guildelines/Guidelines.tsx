import React, { lazy, Suspense, useEffect } from 'react'
import Sidelines from '../../utils/sidelines/Sidelines'
import Grid from '../../utils/grids/Grid'
import Section from './segments/Section'
import Spacer from '../../utils/spacer/Spacer'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import { useIntroTransition } from '../../hooks/useHeroTransition'
import UtilsSection from './segments/UtilsSection'
import Font from '../../utils/fonts/Font'
import Container from '../../components/containers/Container'

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
  const [heroTransition, setHeroTransition] = useIntroTransition()

  useEffect(() => {
    setHeroTransition({ guidelines: false })
  }, [setHeroTransition])

  return (
    <DocumentSizeProvider>
      <Grid />
      <Sidelines />
      <div style={{ transform: heroTransition.guidelines ? "translateY(240px)" : "translateY(0px)", opacity: heroTransition.guidelines ? 0 : 1, transition: "opacity .6s ease, transform .6s ease" }}>
        <Spacer contained height={104} />
        <Section title='Design Guidelines' value='Utility Section' />
        <UtilsSection />
        <Suspense fallback={<Container><Font type="text">Loading...</Font></Container>} >
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

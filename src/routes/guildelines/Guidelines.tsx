import React, { useEffect } from 'react'
import Sidelines from '../../utils/sidelines/Sidelines'
import Grid from '../../utils/grids/Grid'
import Section from './segments/Section'
import FontSection from './segments/FontSection'
import Spacer from '../../utils/spacer/Spacer'
import NavigationSection from './segments/NavigationSection'
import UtilsSection from './segments/UtilsSection'
import { DeviceSection } from './segments/DeviceSection'
import { ImageSection } from './segments/ImageSection'
import CardSection from './segments/CardSection'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import { useIntroTransition } from '../../hooks/useHeroTransition'

////////////////////////////////////////////////////////////////////////////////

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
      </div>
    </DocumentSizeProvider>
  )
}

export default Guidelines

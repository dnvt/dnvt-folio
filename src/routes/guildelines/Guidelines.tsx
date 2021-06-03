import React from 'react'
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

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/Guidelines!
 */
const Guidelines: React.FC = () => {

  return (
    <>
      <Grid />
      <Sidelines />
      <Spacer contained height={104} />
      <Section title='Design Guidelines' value='Font Section' />
      <FontSection />
      <Section value='Navigation Section' />
      <NavigationSection />
      <Section value=' Utility Section' />
      <UtilsSection />
      <Section value=' Device Section' />
      <DeviceSection />
      <Section value=' Image Section' />
      <ImageSection />
      <Section value=' Card Section' />
      <CardSection />
    </>
  )
}

export default Guidelines

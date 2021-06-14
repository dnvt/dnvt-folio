import React from "react"
import Container from "../../../../../components/containers/Container"
import Spacer from "../../../../../utils/spacer/Spacer"
import Font from "../../../../../utils/fonts/Font"
import Column from "../../../../../components/containers/Column"
import { Vignette } from "../../../../../components/vignettes/Vignettes"

/// Images
import contextPng from "../../../../../assets/images/USMobile/System/Context.png"
import contextWebp from "../../../../../assets/images/USMobile/System/Context.webp"
import componentsPng from "../../../../../assets/images/USMobile/System/Components.png"
import componentsWebp from "../../../../../assets/images/USMobile/System/Components.webp"

const DashboardContext: React.FC = () => {
  return (
    <>
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Context</Font>
        <Column spacer="third">
          <Font type='text'>
            US Mobile is a telecom company that sells T-Mobile and Verizon networks. We focus on highly customizable and affordable plans for your devices.
          </Font>
        </Column>
        <Spacer height={32} />
      </Container>
      <Vignette
        src={[contextPng, contextWebp]}
        alt='Legacy version of the dashboard'
      />
      <Container>
        <Spacer height={40} />
        <Column spacer="third">
          <Font type='text'>
            How can we modernize our dashboard solution to new design standards? Making it a cross-platform compatible (desktop to smartphone stores) and standalone app–no connectivity required? With our limited resources ~ 8 employees in total.
          </Font>
          <Font type='text'>
            We entirely reinvented our designs and processes, genuinely focused around cross-platform components with a brand new graphic style-guides and branding. Our Design System Library is made of React components, that can be improved with the addition of new features.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignette
        src={[componentsPng, componentsWebp]}
        alt='Legacy version of the dashboard'
      />
    </>
  )
}

export default DashboardContext

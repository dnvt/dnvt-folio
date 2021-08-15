import React from "react"
import { useTheme } from "react-jss"
import Column from "../../../components/containers/Column"
import Container from "../../../components/containers/Container"
import Button from "../../../ui/buttons/Button"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import { Theme } from "../../../utils/theme/theme"

const AboutSection: React.FC = () => {
  const theme: Theme = useTheme()
  return (
    <Container>
      <Font type='h2'>About</Font>
      <Spacer height={24} />
      <Font type='h5' style={{ color: theme.text.hover }}>
        Senior Product Designer at Frame.io
      </Font>
      <Column spacer="third">
        <Font type='h3'>
          François Denavaut.
          <br /> Product & Creative Direction for the Internets
        </Font>
      </Column>
      <Spacer height={24} />
      <Column spacer="third">
        <Font type='text'>
          Accomplished product designer and creative director able to provide
          strong leadership on the development of product designs, marketing
          campaigns, and user interfaces.
        </Font>
      </Column>
      <Column spacer="third">
        <Font type='text'>
          Skilled project manager, capable of driving a project from inception
          to completion. Excellent communicator adept at taking complex topics
          and conveying them in a clear and concise manner understandable by
          both industry professionals and non-industry professionals.
          <span><Button path="/about">Continue reading...</Button></span>
        </Font>
      </Column>
    </Container>
  )
}

export default AboutSection

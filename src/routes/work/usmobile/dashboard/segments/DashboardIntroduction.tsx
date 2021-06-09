import React from "react"
import Column from "../../../../../components/containers/Column"
import Container from "../../../../../components/containers/Container"
import Font from "../../../../../utils/fonts/Font"
import Spacer from "../../../../../utils/spacer/Spacer"
import SpacerEightyHalf from "../../../../../utils/spacer/variations/SpacerEightyHalf"

const DashboardIntroduction: React.FC<{ color: string }> = ({ color }) => {

  return (
    <>
      <SpacerEightyHalf />
      <Container>
        <Font type='h4'>Head of Design</Font>
        <Font type='h1'>
          US Mobile PWA <br />
          Dashboard use case
        </Font>
        <Spacer height={32} />
        <Font type='h5' style={{ color: color }}>
          Illustrations - Interface - Design systems
        </Font>
        <Column spacer="third">
          <Font type='text'>
            US Mobile is a telecom company that sells T-Mobile and Verizon
            networks. We focus on highly customizable and affordable plans for
            your devices.
          </Font>
          <Font type='text'>
            As the Lead Product Designer and Head of Design at US Mobile, I am
            directly involved in defining the product strategy, responsible for
            designing the UI and product usability. Finally, I am supervising
            our front-end team to ensure the quality of the result.
          </Font>
        </Column>
      </Container>
    </>
  )
}

export default DashboardIntroduction

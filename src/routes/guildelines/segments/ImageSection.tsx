import React from "react"
import Container from "../../../components/containers/Container"
import { BigVignette, Vignette } from "../../../components/vignettes/Vignettes"
import Spacer from "../../../utils/spacer/Spacer"

export const ImageSection: React.FC = () => {

  return (
    <>
      <Container>
        <Spacer height={24} />
      </Container>
      <BigVignette
        withLegend
        alt='This is a fantastic image for you mon ami'
        src={["", ""]}
      />
      <Container>
        <Spacer height={32} />
      </Container>
      <Vignette
        withLegend
        alt='This is a fantastic image for you mon ami'
        src={["", ""]}
      />
      <Container>
        <Spacer height={32} />
      </Container>
      <Vignette alt="" src={["", ""]} />
    </>
  )
}

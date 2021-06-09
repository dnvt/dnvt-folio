import React from "react"
import Container from "../../../components/containers/Container"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Spacer, { HeightType } from "../Spacer"

const SpacerEightyHalf: React.FC = () => {
  const window = useWindowSize()

  // Might need strings
  let height: HeightType

  if (window.width > 991) height = 80
  if (window.width > 767) height = 64
  else height = 40

  return (
    <>
      <Container>
        <Spacer height={height} />
      </Container>
    </>
  )
}

export default SpacerEightyHalf

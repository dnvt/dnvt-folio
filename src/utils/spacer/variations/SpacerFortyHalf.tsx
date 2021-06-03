import React from "react"
import Container from "../../../components/containers/Container"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Spacer, { HeightType } from "../Spacer"


const SpacerFortyHalf: React.FC = () => {
  const window = useWindowSize()

  let height: HeightType = 24
  if (window.width > 991) height = 40
  if (window.width > 767) height = 32

  return (
    <Container>
      <Spacer height={height} />
    </Container>
  )
}

export default SpacerFortyHalf

import React from "react"
import Container from "../../components/containers/Container"
import Font from "../fonts/Font"
import Spacer from "../spacer/Spacer"

const LoadingComponent: React.FC = () => {
  return (
    <Container type="height">
      <Spacer height={184} />
      <Font type="text">Loading...</Font>
    </Container>
  )
}

export default LoadingComponent
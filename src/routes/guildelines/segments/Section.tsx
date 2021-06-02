import React from "react"
import Container from "../../../components/containers/Container"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"

interface SectionType {
  value: string
  title?: string
}

const Section: React.FC<SectionType> = (props) => {
  const { title, value } = props
  return (
    <Container>
      <Spacer height={184} />
      {title && <Font type='h1'>{title}</Font>}
      <Font type='h3'>{value}</Font>
    </Container>
  )
}

export default Section

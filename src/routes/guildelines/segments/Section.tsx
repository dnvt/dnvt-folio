import React from "react"
import Container from "../../../components/containers/Container"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"

interface SectionType {
  value: string
  title?: string
}

const Section: React.FC<SectionType> = (props) => {
  const { title, value } = props
  const window = useWindowSize()

  return (
    <Container>
      {window.width > 767 && <Spacer contained height={184} />}
      {title && <Font type='h1'>{title}</Font>}
      <Font type='h3'>{value}</Font>
    </Container>
  )
}

export default Section

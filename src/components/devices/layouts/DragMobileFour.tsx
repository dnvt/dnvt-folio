import React from "react"
import Container from "../../containers/Container"
import Device from "../Device"

type Tuples = [string, string]

type DragMobile = {
  src: [Tuples, Tuples, Tuples, Tuples]
  alt: [string, string, string, string]
}

const DragMobileFour: React.FC<DragMobile> = (props) => {
  const { src, alt } = props

  return (
    <Container drag="four">
      <Device type="mobile" src={src[0]} alt={alt[0]} />
      <Device type="mobile" src={src[1]} alt={alt[0]} />
      <Device type="mobile" src={src[2]} alt={alt[0]} />
      <Device type="mobile" src={src[3]} alt={alt[0]} />
    </Container>
  )
}

export default DragMobileFour

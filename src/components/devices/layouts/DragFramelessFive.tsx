import React from "react"
import Container from "../../containers/Container"
import Device from "../Device"

type Tuples = [string, string]

type DragFiveProps = {
  src: [Tuples, Tuples, Tuples, Tuples, Tuples]
  alt: [string, string, string, string, string]
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/DragFramelessFive!
 */
const DragFramelessFive: React.FC<DragFiveProps> = ({ src, alt }) => {
  return (
    <Container drag="five">
      <Device type="frameless" src={src[0]} alt={alt[0]} />
      <Device type="frameless" src={src[1]} alt={alt[1]} />
      <Device type="frameless" src={src[2]} alt={alt[2]} />
      <Device type="frameless" src={src[3]} alt={alt[3]} />
      <Device type="frameless" src={src[4]} alt={alt[4]} />
    </Container>
  )

}

export default DragFramelessFive

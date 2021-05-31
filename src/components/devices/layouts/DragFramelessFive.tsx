import React from "react"
import { STuples } from "../../cards/Card"
import Container from "../../containers/Container"
import Device from "../Device"


type DragFiveProps = { src: STuples, alt: string, key: number }
export type FiveImagesType = [DragFiveProps, DragFiveProps, DragFiveProps, DragFiveProps, DragFiveProps]
interface DragFramelessFiveProps { images: FiveImagesType }

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/DragFramelessFive!
 */
const DragFramelessFive: React.FC<DragFramelessFiveProps> = ({ images }) => {
  const devices = images.map(FiveDevices)

  return <Container drag="five">{devices}</Container>

}

const FiveDevices: React.FC<DragFiveProps> = ({ src, alt, key }) => {
  return <Device type="frameless" src={src} alt={alt} key={key} />
}

export default DragFramelessFive

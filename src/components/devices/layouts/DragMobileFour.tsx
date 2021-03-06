import React from "react"
import { STuples } from "../../cards/Card"
import Container from "../../containers/Container"
import Device from "../Device"

type DragFourProps = { src: STuples, alt: string, key: number }
export type FourImagesType = [DragFourProps, DragFourProps, DragFourProps, DragFourProps]
interface DragMobileFourProps { images: FourImagesType }

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/DragMobileFour!
 */
const DragMobileFour: React.FC<DragMobileFourProps> = ({ images }) => {
  const devices = images.map(FourDevices)

  return <Container drag="four">{devices}</Container>
}

const FourDevices: React.FC<DragFourProps> = ({ src, alt, key }) => {
  return <Device type="mobile" src={src} alt={alt} key={key} />
}

export default DragMobileFour

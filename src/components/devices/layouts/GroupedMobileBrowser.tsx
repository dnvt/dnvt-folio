import React from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Spacer from "../../../utils/spacer/Spacer"
import SpacerFullHeight from "../../../utils/spacer/variations/SpacerFullHeight"
import { STuples } from "../../cards/Card"
import Container from "../../containers/Container"
import Device from "../Device"

type DeviceProps = { src: STuples, alt: string, key: number }
export type DeviceImagesType = [DeviceProps, DeviceProps]
export type DevicesMixed = { browser: DeviceImagesType, mobile: DeviceImagesType }
interface GroupedDeviceProps { images: DevicesMixed }


////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/GroupedMobileBrowser!
 */
const GroupedMobileBrowser: React.FC<GroupedDeviceProps> = ({ images }) => {
  const window = useWindowSize()
  const { browser, mobile } = images

  const browserDevices = browser.map(Browsers)
  const mobileDevices = mobile.map(Mobiles)

  if (window.width > 991) return bigLayout()
  if (window.width > 575) return smallLayout()

  return mobileLayout()

  ////////////////////////////////////////////////////////////////////////////////

  function bigLayout(): JSX.Element {
    return (
      <>
        <Container type="big">
          {browserDevices[0]}
          <SpacerFullHeight />
          {mobileDevices[0]}
        </Container>

        <Spacer contained height={80} />

        <Container type="big">
          {mobileDevices[1]}
          <SpacerFullHeight />
          {browserDevices[1]}
        </Container>
      </>
    )
  }

  function smallLayout(): JSX.Element {
    return (
      <>
        <Container type="big">
          {browserDevices[0]}
        </Container>
        <Spacer contained height={80} />

        <Container type="big">
          {mobileDevices[0]}
          {mobileDevices[1]}
        </Container>
        <Spacer contained height={80} />

        <Container type="big">
          {browserDevices[1]}
        </Container>
      </>
    )
  }

  function mobileLayout(): JSX.Element {
    return (
      <>
        <Container type="big">
          {browserDevices[0]}
        </Container>
        <Spacer contained height={40} />

        <Container type="big">
          {browserDevices[1]}
        </Container>
        <Spacer contained height={40} />

        <Container type="big" center>
          {mobileDevices[0]}
        </Container>
        <Spacer contained height={40} />

        <Container type="big" center>
          {mobileDevices[1]}
        </Container>
      </>
    )
  }
}

const Browsers: React.FC<DeviceProps> = ({ src, alt, key }) => {
  return <Device type="browser" src={src} alt={alt} key={key} />
}
const Mobiles: React.FC<DeviceProps> = ({ src, alt, key }) => {
  return <Device type="mobile" src={src} alt={alt} key={key} />
}

export default GroupedMobileBrowser

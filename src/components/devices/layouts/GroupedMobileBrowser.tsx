import React from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Spacer from "../../../utils/spacer/Spacer"
import SpacerFullHeight from "../../../utils/spacer/variations/SpacerFullHeight"
import Container from "../../containers/Container"
import Device from "../Device"

interface GroupedDevicePropTypes {
  srcBrowser: [string, string][]
  srcMobile: [string, string][]
  altBrowser: string[]
  altMobile: string[]
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/GroupedMobileBrowser!
 */
const GroupedMobileBrowser: React.FC<GroupedDevicePropTypes> = (props) => {
  const window = useWindowSize()
  const { srcBrowser, srcMobile, altBrowser, altMobile } = props

  const browserComponent = [
    <Device type="browser" src={srcBrowser[0]} alt={altBrowser[0]} />,
    <Device type="browser" src={srcBrowser[1]} alt={altBrowser[1]} />]

  const mobileComponent = [
    <Device type="mobile" src={srcMobile[0]} alt={altMobile[0]} />,
    <Device type="mobile" src={srcMobile[1]} alt={altMobile[1]} />]

  if (window.width > 992) return bigLayout()
  if (window.width > 576) return smallLayout()

  return mobileLayout()

  ////////////////////////////////////////////////////////////////////////////////

  function bigLayout(): JSX.Element {
    return (
      <>
        <Container big>
          {browserComponent[0]}
          <SpacerFullHeight />
          {mobileComponent[0]}
        </Container>

        <Spacer contained height={80} />

        <Container big>
          {mobileComponent[1]}
          <SpacerFullHeight />
          {browserComponent[1]}
        </Container>
      </>
    )
  }

  function smallLayout(): JSX.Element {
    return (
      <>
        <Container big>
          {browserComponent[0]}
        </Container>
        <Spacer contained height={80} />

        <Container big center>
          {mobileComponent[0]}
          <SpacerFullHeight />
          {mobileComponent[1]}
        </Container>
        <Spacer contained height={80} />

        <Container big>
          {browserComponent[1]}
        </Container>
      </>
    )
  }

  function mobileLayout(): JSX.Element {
    return (
      <>
        <Container big>
          {browserComponent[0]}
        </Container>
        <Spacer contained height={40} />

        <Container big>
          {browserComponent[1]}
        </Container>
        <Spacer contained height={40} />

        <Container big center>
          {mobileComponent[0]}
        </Container>
        <Spacer contained height={40} />

        <Container big center>
          {mobileComponent[1]}
        </Container>
      </>
    )
  }
}

export default GroupedMobileBrowser

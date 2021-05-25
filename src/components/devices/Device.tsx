import React from "react"
import { useTheme } from "react-jss"
import ImageContainer from "../../ui/images/Image"
import { Theme } from "../../utils/theme/theme"
import DeviceStyle from "./Device-style"

interface DeviceProps {
  src?: string[]
  alt: string
  device: "mobile" | "browser" | "browserless" | "frameless"
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Takes a device name and render the device in css
 * @param DeviceProps image description
 * @param src tuple of png and webp
 * @param device tuple of png and webp
 * @returns Device(Image) component
 */

const Device: React.FC<DeviceProps> = (props) => {
  const theme: Theme = useTheme()
  const classes = DeviceStyle({ ...props, theme })

  const { src, alt, device } = props

  let deviceType = null

  if (device == "browserless") deviceType = browserLess()
  if (device == "browser") deviceType = browser()
  if (device == "mobile") deviceType = mobile()
  if (device == "frameless") deviceType = frameless()
  return deviceType

  ////////////////////////////////////////////////////////////////////////////////

  ///
  // Browser device
  /// TODO: Create real class for this <Image />
  function browser(): JSX.Element {
    return (
      <div className={classes.browserContent}>
        <div className={classes.tricolor}></div>
        <ImageContainer fullWidth src={src} alt={alt} />
      </div>
    )
  }

  // Browser headerless device
  /// TODO: Create real class for this <Image />
  function browserLess(): JSX.Element {
    return (
      <div className={classes.browserLessContent}>
        <ImageContainer fullWidth src={src} alt={alt} />
      </div>
    )
  }

  // Mobile device
  function mobile(): JSX.Element {
    return (
      <div className={classes.mobileContent}>
        <div className={classes.ligns}></div>
        <ImageContainer mobile src={src} alt={alt} />
        <div className={classes.camera}>
          <div className={classes.sound}></div>
        </div>
      </div>
    )
  }

  // Frameless device
  function frameless(): JSX.Element {
    return (
      <div className={classes.shadowContent}>
        <ImageContainer src={src} alt={alt} />
      </div>
    )
  }
}

export default Device

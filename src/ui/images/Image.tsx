import React from "react"
import { useTheme } from "react-jss"
import Container from "../../components/containers/Container"
import { useWindowSize } from "../../hooks/useWindowSize"
import { Theme } from "../../utils/theme/theme"
import Button from "../buttons/Button"
import ImageStyle from "./Image-style"

interface ImageType {
  src: string[] | undefined
  alt?: string
  scale?: number
  background?: string
  fullWidth?: Boolean
  big?: Boolean
  mobile?: Boolean
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Takes a description and the webp and png links
 * @param alt image description
 * @param src tuple of png and webp
 * @returns Image component
 */
const ImageContainer: React.FC<ImageType> = (props) => {
  const theme: Theme = useTheme()
  const classes = ImageStyle({ ...props, theme })
  const window = useWindowSize()

  const { alt, src, scale, background, fullWidth, big, mobile } = props

  let fullWidthSizing =
    window.width! > 768
      ? { width: "100%" }
      : { height: "fill-available", minWidth: "100%" }

  let imageWebp: string | undefined
  let imagePng: string | undefined

  if (src) {
    imageWebp = src[1]
    imagePng = src[0]
  }

  const picture = (
    <picture
      className={classes.image}
      style={
        (background && { background: background }) ||
        (scale && { transform: `scale(${ scale })` }) ||
        undefined
      }
    >
      <source srcSet={imageWebp} type='image/webp' />
      <img
        className={fullWidth ? classes.deviceImg : classes.img}
        style={fullWidth ? fullWidthSizing : { height: "100%" }}
        src={imagePng}
        alt={alt}
      />
    </picture>
  )

  if (src && src[0] != "") return picture
  return loading()

  //

  function loading(): JSX.Element {
    return containerWrapperForBigProps(
      <div className={big ? classes.bigLoading : mobile ? classes.mobileLoading : classes.loading}>
        <Button icon='loading'>Loading...</Button>
      </div>)
  }

  function containerWrapperForBigProps(Element: JSX.Element): JSX.Element {
    return big ? <Container>{Element}</Container> : Element
  }
}

export default ImageContainer

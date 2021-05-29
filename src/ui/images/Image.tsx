import React from "react"
import { useTheme } from "react-jss"
import Container from "../../components/containers/Container"
import { useWindowSize } from "../../hooks/useWindowSize"
import Font from "../../utils/fonts/Font"
import Icon from "../../utils/icons/Icon"
import Underline from "../../utils/line/Underline"
import { Theme } from "../../utils/theme/theme"
import ImageStyle from "./Image-style"

interface ImageType {
  src: string[] | undefined
  alt?: string
  scale?: number
  background?: string
  fullWidth?: Boolean
  big?: Boolean
  card?: Boolean
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

  const { alt, src, scale, background, fullWidth, big, card, mobile } = props

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

  let loaderPositioningClass = classes.loading
  if (big) loaderPositioningClass = classes.bigLoading
  if (mobile) loaderPositioningClass = classes.mobileLoading
  if (card) loaderPositioningClass = classes.cardLoading

  const picture = (
    <picture
      className={classes.Image}
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
      <div className={loaderPositioningClass}>
        <div className={classes.MenuButton}>
          <div className={classes.icon} style={{ marginRight: "8px" }}>
            <Icon name="loading" />
          </div>
          <div>
            <Font type='menu'>Loading...</Font>
            <Underline button opacity={0} />
          </div>
        </div>
      </div>
    )
  }

  function containerWrapperForBigProps(Element: JSX.Element): JSX.Element {
    return big ? <Container>{Element}</Container> : Element
  }
}

export default ImageContainer

import React, { useEffect, useState } from "react"
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
  opacity?: number
  background?: string
  fullWidth?: Boolean
  big?: Boolean
  card?: Boolean
  mobile?: Boolean
  instant?: Boolean
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
  const [loadState, setLoadState] = useState(false)

  const { alt, src, scale, background, opacity, fullWidth, big, card, mobile, instant } = props

  let imageWebp: string | undefined
  let imagePng: string | undefined

  if (src) {
    imageWebp = src[1]
    imagePng = src[0]
  }

  useEffect(() => {
    const img = new Image()
    img.src = src![1] as string
    img.addEventListener("load", onLoad)
    return () => {
      img.removeEventListener("load", onLoad)

    }
  }, [instant, src])

  let fullWidthSizing =
    window.width! > 768
      ? { width: "100%" }
      : { height: "fill-available", minWidth: "100%" }


  const picture = (
    <picture
      className={classes.Image}
      style={
        (background && { background: background }) ||
        (scale && { transform: `scale(${ scale })`, opacity: opacity }) ||
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

  if (loadState) return picture
  return loading()

  //

  function onLoad() {
    setLoadState(true)
  }

  function loading(): JSX.Element {
    return containerWrapperForBigProps(
      <div className={loaderPositioningClass()}>
        <div className={menuButtonClass()}>
          <div className={classes.Icon} style={{ marginRight: "8px" }}>
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

  function loaderPositioningClass() {
    if (big) return classes.bigLoading
    if (mobile) return classes.mobileLoading
    if (card) return classes.cardLoading
    else return classes.loading
  }

  function menuButtonClass() {
    if (big) return classes.BigMenuButton
    else return classes.MenuButton
  }
}

export default ImageContainer
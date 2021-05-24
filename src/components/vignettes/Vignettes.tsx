import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../hooks/useWindowSize"
import ImageContainer from "../../ui/images/Image"
import Font from "../../utils/fonts/Font"
import Spacer from "../../utils/spacer/Spacer"
// import Font from "../../utils/fonts/Font"
// import Spacer from "../../utils/spacer/Spacer"
import { Theme } from "../../utils/theme/theme"
import Container from "../containers/Container"
// import Container from "../containers/Container"

import VignetteStyle from "./Vignettes-style"

export interface VignetteProps {
  alt: string
  src?: any[]
  background?: string
  big?: Boolean
  width?: Boolean
  hero?: Boolean
}

export interface HeroProps {
  alt: string
  src?: any[]
  background?: "color" | string
  big?: Boolean
  width?: Boolean
}

////////////////////////////////////////////////////////////////////////////////

const Vignette: React.FC<VignetteProps> = (props) => {
  const theme: Theme = useTheme()
  const window = useWindowSize()
  const classes = VignetteStyle({ ...props, theme })
  
  const { src, alt, background, big, width } = props
  
  const legendSegment = (
    <>
      <Spacer height={window.width > 992 ? 16 : 8} />
      <Font type='legend'>{alt}</Font>
    </>
  )
  
  const imgSegment = (
    <div
    className={width ? classes.VignetteWidth : classes.Vignette}
    style={{ background: background }}
    >
      <ImageContainer
        fullWidth={width}
        big={big}
        src={src}
        alt={alt}
        />
    </div>
  )
  
  if (big) return bigVignette()
  else return vignette()
  
  //
  
  function bigVignette() {
    return (
      <>
        {imgSegment}
        {alt && <Container>{legendSegment}</Container>}
      </>
    )
  }
  function vignette() {
    return (
      <Container>
        {imgSegment}
        {alt && <> {legendSegment}</>}
      </Container>
    )
  }
}


const HeroVignette: React.FC<HeroProps> = props => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })
  // const [transition] = useHeroTransition();

  const { src, alt, background } = props

  let backgroundColor: string = theme.background.empty
  switch (background) {
    case "color":
      backgroundColor = theme.constant.black
      break
    default:
      break
  }

  let height = "960px"
  if (window.width >= 768) height = "784px"
  if (window.width < 768) height = "416"

  return (
    <div
      className={classes.heroVignette}
      style={{ height: height, background: backgroundColor }}>
      <ImageContainer big src={src} alt={alt} />
    </div>
  )
}

export { HeroVignette, Vignette }
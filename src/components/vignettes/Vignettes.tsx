import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../hooks/useWindowSize"
import ImageContainer from "../../ui/images/Image"
import Font from "../../utils/fonts/Font"
import Spacer from "../../utils/spacer/Spacer"
import { Theme } from "../../utils/theme/theme"
import Container from "../containers/Container"

import VignettesStyle from "./Vignettes-style"

export interface VignettesProps {
  src?: any[]
  alt?: string
  background?: string
  big?: Boolean
  width?: Boolean
  hero?: Boolean
  // tag?: string
}

////////////////////////////////////////////////////////////////////////////////

const Vignettes: React.FC<VignettesProps> = (props) => {

  const theme: Theme = useTheme()
  const window = useWindowSize()
  const classes = VignettesStyle({ ...props, theme })
  // const [transition] = useHeroTransition();

  const { src, alt, background, big, width, hero } = props

  let height = "960px"
  if (window.width >= 768) height = "784px"
  if (window.width < 768) height = "416"

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

  if (hero) return heroVignette()
  if (big) return bigVignette()
  else return vignette()

  //

  function heroVignette() {
    return (
      <div
        className={classes.heroVignette}
        // style={transition[tag] ? null : { height: height }}
        style={{ height: height }}
      >
        <ImageContainer big src={src} alt={alt} />
      </div>
    )
  }
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
        {props.alt && <> {legendSegment}</>}
      </Container>
    )
  }
}

export default Vignettes

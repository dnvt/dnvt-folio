import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import { useWindowSize } from "../../hooks/useWindowSize"
import ImageContainer from "../../ui/images/Image"
import Container from "../containers/Container"
import Legend from "./Legend"
import VignetteStyle from "./Vignettes-style"

export interface VignetteProps {
  src: [string, string]
  alt: string
  withLegend?: Boolean
  background?: string
}

export interface BigProps {
  src: [string, string]
  alt: string
  background?: string
  withLegend?: Boolean
  big?: Boolean
  width?: Boolean
  height?: number
}

export interface HeroProps {
  src: [string, string]
  alt?: string
  background?: "color" | string
  big?: Boolean
  width?: Boolean
  transition?: Boolean
}

////////////////////////////////////////////////////////////////////////////////

const Vignette: React.FC<VignetteProps> = (props) => {
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })

  const { src, alt, withLegend } = props

  return (
    <Container>
      <div className={classes.Image}>
        <ImageContainer
          src={src}
          alt={alt}
        />
      </div>
      {withLegend && <Legend alt={alt} />}
    </Container>
  )
}

const BigVignette: React.FC<BigProps> = props => {
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })
  const { width, background, src, alt, withLegend, height } = props

  return (<>
    <div
      className={classes.Vignette}
      style={{ background: background ?? theme.background.empty, height: height }}
    >
      <ImageContainer
        fullWidth={width}
        big
        src={src}
        alt={alt}
      />
    </div>
    {withLegend && <Container><Legend alt={alt} /></Container>}
  </>)
}

const HeroVignette: React.FC<HeroProps> = props => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })

  const { src, alt, background, transition } = props

  let height = 416
  if (window.width > 767) height = 784
  if (window.width > 991) height = 960

  return (
    <div
      className={classes.heroVignette}
      style={{ height: transition == true ? undefined : height, background: background ?? theme.background.empty }}>
      <ImageContainer big src={src} alt={alt} instant />
    </div>
  )
}

export { HeroVignette, BigVignette, Vignette }
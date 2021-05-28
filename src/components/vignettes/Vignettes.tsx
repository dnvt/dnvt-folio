import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import { useWindowSize } from "../../hooks/useWindowSize"
import ImageContainer from "../../ui/images/Image"
import Container from "../containers/Container"
import Legend from "./Legend"
import VignetteStyle from "./Vignettes-style"

export interface VignetteProps {
  alt: string
  src: any[]
  background?: string
}

export interface BigProps {
  alt: string
  src: any[]
  background?: string
  big?: Boolean
  width?: Boolean
}

export interface HeroProps {
  alt: string
  src: any[]
  background?: "color" | string
  big?: Boolean
  width?: Boolean
}

////////////////////////////////////////////////////////////////////////////////

const Vignette: React.FC<VignetteProps> = (props) => {
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })

  const { src, alt } = props

  return (
    <Container>
      <div className={classes.Image}>
        <ImageContainer
          src={src}
          alt={alt}
        />
      </div>
      {alt && <Legend alt={alt} />}
    </Container>
  )
}

const BigVignette: React.FC<BigProps> = props => {
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })
  const { width, background, src, alt } = props

  return (<>
    <div
      className={classes.Vignette}
      style={{ background: background ?? theme.background.empty }}
    >
      <ImageContainer
        fullWidth={width}
        big
        src={src}
        alt={alt}
      />
    </div>
    {alt && <Container><Legend alt={alt} /></Container>}
  </>)
}

const HeroVignette: React.FC<HeroProps> = props => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const classes = VignetteStyle({ ...props, theme })

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

export { HeroVignette, BigVignette, Vignette }
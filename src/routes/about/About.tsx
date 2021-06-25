import React, { useEffect } from "react"
import { useTheme } from "react-jss"
import Column from "../../components/containers/Column"
import Container from "../../components/containers/Container"
import { DocumentSizeProvider } from "../../hooks/useDimensionSize"
import { useIntroTransition } from "../../hooks/useHeroTransition"
import { useMainColor } from "../../hooks/useSetMainColor"
import { useWindowSize } from "../../hooks/useWindowSize"
import Font from "../../utils/fonts/Font"
import Fontimation from "../../utils/fonts/Fontimation"
import Grid from "../../utils/grids/Grid"
import Spacer from "../../utils/spacer/Spacer"
import { Theme } from "../../utils/theme/theme"

const About: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()
  const [heroTransition, setHeroTransition] = useIntroTransition()
  const [, setColor] = useMainColor()

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, about: false } })
    setColor(theme.text.hover)
  }, [setColor, setHeroTransition, theme.text.hover])

  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ transform: heroTransition.about ? "translateY(-120px)" : "translateY(-360px)", opacity: heroTransition.about ? 0 : 1, transition: "opacity .6s ease, transform .6s ease", minHeight: "100%" }}>
        <div style={{ position: "relative", marginBottom: compensateFontimationHeight(), transform: "translateX(0px)" }}>
          <Fontimation>About Moi!</Fontimation>
        </div>
        <Container>
          <Font type='h1'>
            Product, Fun & Creative Direction for the Internets.
          </Font>
          <Font type='h5' style={{ color: theme.text.hover }}>
            Currently working at Frame.io
          </Font>
          <Spacer height={8} />
          <Column spacer="third">
            <Font type='text'>
              Accomplished product designer and creative director able to provide
              strong leadership on the development of product designs, marketing
              campaigns, and user interfaces.
            </Font>
          </Column>
          <Column spacer="third">
            <Font type='text'>
              Skilled project manager, capable of driving a project from inception
              to completion. Excellent communicator adept at taking complex topics
              and conveying them in a clear and concise manner understandable by
              both industry professionals and non-industry professionals.
            </Font>
          </Column>
        </Container>
      </div>
    </DocumentSizeProvider >
  )

  //

  function compensateFontimationHeight() {
    if (window.width > 1359) return -528
    if (window.width > 767) return -320
    return -80
  }
}

export default About

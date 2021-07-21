import React, { useEffect } from "react"
import { useTheme } from "react-jss"
import Column from "../../components/containers/Column"
import Container from "../../components/containers/Container"
import { BigVignette, Vignette } from "../../components/vignettes/Vignettes"
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
  const [color, setColor] = useMainColor()

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
            François Denavaut, <br /> digital designer.
          </Font>
          <Spacer height={40} />
          <Column spacer="third">
            <Font type='text'>
              Description of me and what I do and what I like. <br />
              Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Font>
          </Column>
          <Spacer height={40} />
        </Container>
        <BigVignette withLegend alt="Das ist mich!" src={["", ""]} background="#ccc" />
        <Container>
          <Spacer height={104} />
          <Font type="h5" style={{ color }}>January 2020 till now</Font>
          <Font type="h3">Senior Product Designer <br /> at Frame.io</Font>
          <Spacer height={16} />
          <Column spacer="third">
            <Font type='text'>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec sed odio dui.
            </Font>
          </Column>
          <Spacer height={40} />
        </Container>
        <Vignette alt="Das ist mich!" src={["", ""]} background="#ccc" />
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

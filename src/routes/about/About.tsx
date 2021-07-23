import React, { useEffect } from "react"
import { useTheme } from "react-jss"
import FooterCards, { FooterContentType } from "../../components/cards/layouts/FooterCards"
import Column from "../../components/containers/Column"
import Container from "../../components/containers/Container"
import { BigVignette, Vignette } from "../../components/vignettes/Vignettes"
import { DocumentSizeProvider } from "../../hooks/useDimensionSize"
import { useIntroTransition } from "../../hooks/useHeroTransition"
import { useMainColor } from "../../hooks/useSetMainColor"
// import { useWindowSize } from "../../hooks/useWindowSize"
import Font from "../../utils/fonts/Font"
// import Fontimation from "../../utils/fonts/Fontimation"
import NumberedList from "../../utils/fonts/NumberedList"
import Grid from "../../utils/grids/Grid"
import Spacer from "../../utils/spacer/Spacer"
import { Theme } from "../../utils/theme/theme"
import getFooter from "../work/projects/Footer.content"

const About: React.FC = () => {
  const theme: Theme = useTheme()
  // const window = useWindowSize()
  const [, setHeroTransition] = useIntroTransition()
  const [color, setColor] = useMainColor()

  const USMOBILE: FooterContentType = [
    {
      key: 1,
      title: { value: "App" },
      ...getFooter().system
    },
    {
      key: 2,
      title: { value: "Matrix" },
      ...getFooter().matrix
    },
    {
      key: 3,
      title: { value: "Branding" },
      background: "usmobile",
      ...getFooter().branding
    },
  ]

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, about: false } })
    setColor(theme.text.hover)
  }, [setColor, setHeroTransition, theme.text.hover])

  return (
    <DocumentSizeProvider>
      <Grid />
      {/* <div style={{ transform: heroTransition.about ? "translateY(-120px)" : "translateY(-360px)", opacity: heroTransition.about ? 0 : 1, transition: "opacity .6s ease, transform .6s ease", minHeight: "100%" }}> */}
      {/* <div style={{ transform: heroTransition.about ? "translateY(0px)" : "translateY(240px)", opacity: heroTransition.about ? 0 : 1, transition: "opacity .6s ease, transform .6s ease", minHeight: "100%" }}> */}
      {/* <div style={{ position: "relative", marginBottom: compensateFontimationHeight(), transform: "translateX(0px)" }}>
          <Fontimation>About Moi!</Fontimation>
        </div> */}
      <Container>
        <Spacer height={104} />
        <Spacer height={184} />
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
      <Container>
        <Spacer height={64} />
        <Font type="h4">Enteprise squad</Font>
        <Column spacer="third">
          <Font type="text">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec sed odio dui.</Font>
        </Column>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>June 2016 to December 2019</Font>
        <Font type="h3">Head of Design <br /> at US Mobile</Font>
        <Spacer height={16} />
        <Column spacer="third">
          <Font type="text">
            US Mobile is a telecom company that sells T-Mobile and Verizon networks. We focus on highly customizable and affordable plans for your devices.
          </Font>
          <Font type="text">
            As the Lead Product Designer and Head of Design at US Mobile, and only designer, I’m a Jack of all trades, from front-end, illustration, UX, UI and design planning.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <Vignette withLegend={false} alt="Das ist mich!" src={["", ""]} background="#ccc" />
      <Container>
        <Spacer height={40} />
        <Font type={"h4"}>Design and Planning</Font>
        <Column spacer="third">
          <NumberedList number={1}><Font type={"text"}>Lead all creative direction organizationally, which is a mobile virtual network operator focused on consumer and enterprise mobile services. Drive integration efforts with Verizon’s carrier platform while maintaining continued service platform integration with T-Mobile.</Font></NumberedList>
          <NumberedList number={2}><Font type={"text"}>Develop product strategy, set product design requirements and create priority maps based on end-user data.</Font></NumberedList>
          <NumberedList number={3}><Font type={"text"}>Work with Executive leadership to collaborate on the ideology utilized to support development end-to-end user experiences, interaction models, and screen designs.</Font></NumberedList>
          <NumberedList number={4}><Font type={"text"}>Oversee operations of the front-end project team to ensure consistent quality levels and delivery timeliness utilizing Agile methodology.</Font></NumberedList>
          <NumberedList number={5}><Font type={"text"}>Guide the creation of the organizational Design Pattern Library as product offerings grow.</Font></NumberedList>
        </Column>
        <Spacer height={24} />
        <Font type={"h4"}>Selected achievments</Font>
        <Column spacer="third">
          <Font type="text" style={{ fontWeight: "bold" }}>A key leader in the expansion of the organization from 15,000 customers to more than 60,000 users, which occurred primarily through word of mouth from product experience.</Font>
        </Column>
        <Spacer height={24} />
        <Font type={"h4"}>Selected works</Font>
        <Spacer height={40} />
        <FooterCards content={USMOBILE} />
        <Spacer height={104} />
      </Container>
      {/* </div> */}
    </DocumentSizeProvider >
  )

  //

  // function compensateFontimationHeight() {
  //   if (window.width > 1359) return -528
  //   if (window.width > 767) return -320
  //   return -80
  // }
}

export default About

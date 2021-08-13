import React, { useEffect, useState } from "react"
import { useTheme } from "react-jss"
import Card from "../../components/cards/Card"
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
import norsePng from "../../assets/images/Norse/Norse.png"
import norseWebp from "../../assets/images/Norse/Norse.webp"
import GroupedCard, { GroupedContentType } from "../../components/cards/layouts/GroupedCards"
import GoogleMapReact from 'google-map-react'

const About: React.FC = () => {
  const theme: Theme = useTheme()
  // const window = useWindowSize()
  const [, setHeroTransition] = useIntroTransition()
  const [color, setColor] = useMainColor()
  const [map] = useState({
    center: {
      lat: 50.290812313420425,
      lng: 2.778031617495157
    },
    zoom: 14
  })

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

  const BERLIN_GIGS: GroupedContentType[] = [[
    {
      key: 1,
      noHover: true,
      // status: "construction",
      src: ["", ""],
      srcDark: ["", ""],
      alt: "kiptfit keeps you fit!",
      tag: { value: "Product Design - Motion design" },
      title: { value: "Kipfit" },
      // background: "transparent",
      path: "/work/kipfit-app",
    },
    {
      key: 2,
      noHover: true,
      // status: "construction",
      src: ["", ""],
      alt: "Mimi hearing illustrations",
      tag: { value: "Illustration - Product design" },
      title: { value: "Mimi Hearing" },
      // background: "mimi",
      path: "/work/mimi-hearing-technology",
    },], [{
      key: 1,
      noHover: true,
      // status: "construction",
      src: ["", ""],
      srcDark: ["", ""],
      alt: "kiptfit keeps you fit!",
      tag: { value: "Product Design - Motion design" },
      title: { value: "Kipfit" },
      // background: "transparent",
      path: "/work/kipfit-app",
    },
    {
      key: 2,
      noHover: true,
      // status: "construction",
      src: ["", ""],
      alt: "Mimi hearing illustrations",
      tag: { value: "Illustration - Product design" },
      title: { value: "Mimi Hearing Technology" },
      // background: "mimi",
      path: "/work/mimi-hearing-technology",
    },]
  ]

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, about: false } })
    setColor(theme.text.hover)
  }, [setColor, setHeroTransition, theme.text.hover])

  return (
    <DocumentSizeProvider>
      <Grid />
      <Container>
        <Spacer height={104} />

        {/* Intro  */}

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

      {/* Frame.io  */}

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
      </Container>

      {/* US Mobile  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>June 2016 to December 2019</Font>
        <Font type="h3">Product and Head of Design <br /> at US Mobile</Font>
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
        <Font type="h4">Design and Planning</Font>
        <Column spacer="third">
          <NumberedList number={1}><Font type={"text"}>Lead all creative direction organizationally, which is a mobile virtual network operator focused on consumer and enterprise mobile services. Drive integration efforts with Verizon’s carrier platform while maintaining continued service platform integration with T-Mobile.</Font></NumberedList>
          <NumberedList number={2}><Font type={"text"}>Develop product strategy, set product design requirements and create priority maps based on end-user data.</Font></NumberedList>
          <NumberedList number={3}><Font type={"text"}>Work with Executive leadership to collaborate on the ideology utilized to support development end-to-end user experiences, interaction models, and screen designs.</Font></NumberedList>
          <NumberedList number={4}><Font type={"text"}>Oversee operations of the front-end project team to ensure consistent quality levels and delivery timeliness utilizing Agile methodology.</Font></NumberedList>
          <NumberedList number={5}><Font type={"text"}>Guide the creation of the organizational Design Pattern Library as product offerings grow.</Font></NumberedList>
        </Column>
        <Spacer height={24} />
        <Font type="h4">Selected achievments</Font>
        <Column spacer="third">
          <Font type="text" style={{ fontWeight: "bold" }}>A key leader in the expansion of the organization from 15,000 customers to more than 60,000 users, which occurred primarily through word of mouth from product experience.</Font>
        </Column>
        <Spacer height={24} />
        <Font type="h4">Selected works</Font>
        <Spacer height={40} />
        <FooterCards content={USMOBILE} />
      </Container>

      {/* US Mobile  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>From 2018 onward</Font>
        <Font type="h3">Freelance Creative Director<br /> at Norse Interior</Font>
        <Spacer height={16} />
        <Column spacer="third">
          <Font type="text">
            Oversee the development of logos, branding, and design systems for products designed to serve as supplemental accessories to IKEA furniture systems.
          </Font>
          <Font type="text">
            Lead the design and delivery of illustrations and technical visuals aimed at creating an immersive user experience. Created and promoted the pitch-deck for investor groups.
          </Font>
        </Column>
        <Spacer height={24} />
        <Font type="h4">Selected achievments</Font>
        <Column spacer="third">
          <Font type="text" style={{ fontWeight: "bold" }}>Developed scalable visual standards that created uniformity for the brand’s product collection.</Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <Card
        tag={{ value: "Branding - Illustrations" }}
        status="construction"
        src={[norsePng, norseWebp]}
        alt="Norse interieur manual"
        title={{ value: "Norse Interiors" }}
        background="transparent"
      >
        Norse Interiors
      </Card>

      {/* Artory  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>From 2015 to 2016</Font>
        <Font type="h3">Product Designer<br /> at Artory</Font>
        <Spacer height={16} />
        <Column spacer="third">
          <Font type="text">
            Engaged in the development of the first object-oriented database designed to support a unique blockchain-based registry for art and collectibles. Applied design thinking methodology to back the development of a start-up corporation.
          </Font>
          <Font type="text">
            Collaborated with investors, strategic stakeholders, and strategy teams to design investor decks, business plans, and product requirements.
          </Font>
          <Font type="text">
            Translated product requirements in actionable design deliverables including user flows, sketches, wireframes, product mockups, spec sheets, and prototype designs.
          </Font>
        </Column>
        <Spacer height={24} />
        <Font type="h4">Selected achievments</Font>
        <Column spacer="third">
          <Font type="text" style={{ fontWeight: "bold" }}>Facilitated the processes and delivery in the creation of a rapid testing and iteration design platform centered on a user-centric experience.</Font>
        </Column>
        <Spacer height={40} />
      </Container>

      {/* Berlin gigs  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>From 2015 to 2016</Font>
        <Font type="h3">Product & Interaction Designer<br /> in Berlin</Font>
        <Spacer height={16} />
        <Column spacer="third">
          <Font type="text">
            Developed products, interfaces, motion designs, and illustrations in support of a variety of organizations including globally recognized brands such as Airbus and Siemens.
          </Font>
        </Column>
        <Spacer height={24} />
        <Font type="h4">Selected achievments</Font>
        <Column spacer="third">
          <Font type="text" style={{ fontWeight: "bold" }}>Created an innovative and radical new cabin design concept for Airbus, focused on how users interact with their in-flight environment. Led the UX concept, interaction design, and prototype development efforts of the team.</Font>
          <Font type="text" style={{ fontWeight: "bold" }}>Designed branding and communication tools for Love Your Waste to support the organization’s efforts to fundraise. Drafted posters, pitch-decks, illustrations, and web pages for marketing to investors, to raise awareness about Paris environmental conferences, and to educate youth on waste collection in schools.</Font>
          <Font type="text" style={{ fontWeight: "bold" }}>Collaborated with IXDS and Siemens to sketch, design, produce animations, and develop prototypes of the digital interface for an upcoming range of home appliances.</Font>
          <Font type="text" style={{ fontWeight: "bold" }}>Served as an Interaction Designer and illustrator for Mimi IO, which developed a personalized sound app ecosystem. Improved the user interface for the iOS ecosystem and designed a variety of illustrations and animations for their main app.</Font>
          <Font type="text" style={{ fontWeight: "bold" }}>With Cornelsen, I oversaw the creative design and prototype creations for their digital tools targeted at school-aged children. (Oversaw the creative design and prototype creations for Cornelsen’s digital tools targeted at school-aged children.)</Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <GroupedCard content={BERLIN_GIGS[0]} />
      <Spacer height={40} />
      <GroupedCard content={BERLIN_GIGS[1]} left />

      {/* Additional  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>2012 to 2014</Font>
        <Font type="h3">Additional Professional Experience</Font>
        <Spacer height={40} />
        <Font type="text">Interaction Designer</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>IXDS, Berlin</Font>
        <Spacer height={24} />
        <Font type="text">Junior Art Director</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>Viens-là, Paris</Font>
        <Spacer height={24} />
        <Font type="text">Junior Front-End Developer</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>Laforme, Paris</Font>
        <Spacer height={24} />
        <Font type="text">Animation Intern</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>Les 3 Ours production, Paris</Font>
        <Spacer height={24} />
      </Container>

      {/* Education  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>2008 onward</Font>
        <Font type="h3">Educational background <span>🎓</span></Font>
        <Spacer height={40} />
        <Font type="text">Master of Arts, Multimedia Design and Creative Direction</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>GOBELINS, School of the Image</Font>
        <Spacer height={24} />
        <Font type="text">Bachelor of Arts, Multimedia Design and Visual Communications</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>ensaama, Olivier de Serres</Font>
        <Spacer height={24} />
        <Font type="text">Certificate in Design Leadership</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>Parsons School of Design</Font>
        <Spacer height={24} />
        <Font type="text">Baccalaureat, S – mention Bien</Font>
        <Font type="legend" style={{ margin: "-24px 0 0 0" }}>Lycee Robespierre, Arras</Font>
        <Spacer height={24} />
      </Container>

      {/* Judo  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>2008</Font>
        <Font type="h3">Got my second Dan of Judo <span>🥋</span></Font>
        <Spacer height={40} />
        <Vignette alt="Probably the last time I wore a Kimono..." src={["", ""]} background="#ccc" />
      </Container>

      {/* Hometown  */}

      <Container>
        <Spacer height={104} />
        <Font type="h5" style={{ color }}>1990</Font>
        <Font type="h3">Born and raised in Arras, France <span>🐣</span></Font>
        <Spacer height={40} />
        <div style={{ height: "704px" }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_SECRET_NAME as string }}
            defaultCenter={map.center}
            defaultZoom={map.zoom}
          >
          </GoogleMapReact>
        </div>
      </Container>

    </DocumentSizeProvider >
  )
}

export default About

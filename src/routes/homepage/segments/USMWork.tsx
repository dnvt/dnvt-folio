import React, { useMemo } from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Font from "../../../utils/fonts/Font"
import Container from "../../../components/containers/Container"
import Spacer from "../../../utils/spacer/Spacer"
import DragMobileFour from "../../../components/devices/layouts/DragMobileFour"
import Card from "../../../components/cards/Card"
import Column from "../../../components/containers/Column"
import HOMEPAGE_CONTENT from "../Homepage.content"
import { Theme } from "../../../utils/theme/theme"
import { useTheme } from "react-jss"
import InternalLink from "../../../ui/links/internal-link/InternalLink"
import ExternalLink from "../../../ui/links/external-link/ExternalLink"
// import Fontimation from "../../../utils/fonts/Fontimation"

const USMWork: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  const CONTENT = useMemo(() => HOMEPAGE_CONTENT.USMWORK, [])

  let spacerWidth: number | "100%" = "100%"
  if (window.width > 991) spacerWidth = 448
  if (window.width > 1359) spacerWidth = 544

  return (
    <>
      {/* <div style={{ position: "relative", marginBottom: -1320, transform: "translateX(0px)" }}>
        <Fontimation>2016-19</Fontimation>
      </div> */}
      <Container>
        <Font type='h2'>Work</Font>
      </Container>

      <Container>
        <Spacer height={40} />
        <Column spacer="half">
          <Font type='h3'>US Mobile, cellular plans for everybody.</Font>
        </Column>
        <Spacer height={24} />
        <Column grid >
          <div>
            <Font type='text'>
              Lead all creative direction organizationally. <br />
              Develop the product strategy, set product design requirements and
              create priority maps based on end-user data. Drive integration
              efforts with Verizon’s carrier platform while maintaining continued
              service integration with T-Mobile.
            </Font>
          </div>
          <div>
            <Font type='text' style={{ color: theme.text.primary, width: spacerWidth }}>
              Lead to the expansion of the organization from 15,000 customers to
              more than 60,000 users, which occurred primarily through word of
              mouth from product experience.
            </Font>
          </div>
        </Column>
        <div style={{ display: "flex", transform: "translate(0)" }}>
          <InternalLink path='/work/usmobile/dashboard'>Read use case</InternalLink>
          <ExternalLink path='https://usmobile.com'>Visit usmobile.com</ExternalLink>
        </div>
      </Container>

      <Spacer contained height={80} />
      <DragMobileFour images={CONTENT.MOBILE_FOUR} />
      <Spacer contained height={104} />
      <Container>
        <Card
          uncontained
          tag={CONTENT.CARD_BRANDING.tag}
          src={CONTENT.CARD_BRANDING.src}
          alt={CONTENT.CARD_BRANDING.alt}
          path={CONTENT.CARD_BRANDING.path}
          paddingB={CONTENT.CARD_BRANDING.paddingB}
          background={CONTENT.CARD_BRANDING.background}
        >
          Creative direction <br /> & design guidelines
        </Card>
        <Spacer height={32} />
        <Card
          uncontained
          tag={CONTENT.CARD_MATRIX.tag}
          src={CONTENT.CARD_MATRIX.src}
          alt={CONTENT.CARD_MATRIX.alt}
          path={CONTENT.CARD_MATRIX.path}
          paddingB={CONTENT.CARD_MATRIX.paddingB}
          background={CONTENT.CARD_MATRIX.background}
        >
          Build your plan
        </Card>
        <Spacer height={32} />
        <Card
          uncontained
          right
          tag={CONTENT.CARD_SYSTEM.tag}
          src={CONTENT.CARD_SYSTEM.src}
          alt={CONTENT.CARD_SYSTEM.alt}
          path={CONTENT.CARD_SYSTEM.path}
          paddingB={CONTENT.CARD_SYSTEM.paddingB}
          background={CONTENT.CARD_SYSTEM.background}
        >
          US Mobile Dashboard use case
        </Card>

      </Container>
    </>
  )
}

export default USMWork

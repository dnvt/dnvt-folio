import React, { useMemo } from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Font from "../../../utils/fonts/Font"
import Container from "../../../components/containers/Container"
import Spacer from "../../../utils/spacer/Spacer"
import DragMobileFour from "../../../components/devices/layouts/DragMobileFour"
import Card from "../../../components/cards/Card"
import Column from "../../../components/containers/Column"
import HOMEPAGE_CONTENT from "../Homepage.content"
import InternalLink from "../../../ui/links/internal-link/InternalLink"
import ExternalLink from "../../../ui/links/external-link/ExternalLink"
// import Fontimation from "../../../utils/fonts/Fontimation"

const USMWork: React.FC = () => {
  const window = useWindowSize()

  const CONTENT = useMemo(() => HOMEPAGE_CONTENT.USMWORK, [])

  let spacerWidth: number | "100%" = "100%"
  if (window.width > 991) spacerWidth = 448
  if (window.width > 1359) spacerWidth = 544

  return (
    <>

      {/* <Font type="hero">2016-19</Font> */}
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
            <Font type='text' style={{ width: spacerWidth }}>
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
          {...CONTENT.CARD_BRANDING}
        >
          Creative direction <br /> & design guidelines
        </Card>
        <Spacer height={32} />
        <Card
          uncontained
          {...CONTENT.CARD_MATRIX}
        >
          Build your plan
        </Card>
        <Spacer height={32} />
        <Card
          uncontained
          right
          {...CONTENT.CARD_SYSTEM}
        >
          US Mobile Dashboard use case
        </Card>

      </Container>
    </>
  )
}

export default USMWork

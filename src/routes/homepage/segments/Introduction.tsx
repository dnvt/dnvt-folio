import React, { useMemo } from "react"
import GroupedCard from "../../../components/cards/layouts/GroupedCards"
import Column from "../../../components/containers/Column"
import Container from "../../../components/containers/Container"
import ExternalLink from "../../../ui/links/external-link/ExternalLink"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import HOMEPAGE_CONTENT from "../Homepage.content"



const Introduction: React.FC = () => {
  const CONTENT = useMemo(() => HOMEPAGE_CONTENT.INTRODUCTION, [])


  return (
    <>
      {/* <Container style={{ marginTop: "-184px" }}> */}
      <Container>
        <Font type='h1'>
          Digital designer based in New York – currently redefining modern video
          workflow at Frame.io
        </Font>
        <Spacer height={40} />

        <Column spacer="third">
          <Font type='text'>
            Product designer and creative director able to provide strong
            leadership on the development of product designs, marketing
            campaigns, user interfaces, and motion design.
          </Font>
        </Column>
        <ExternalLink path='/'>Get in touch</ExternalLink>
        <Spacer height={80} />
        <Font type='h2'>Latest releases</Font>
        <Spacer height={64} />
      </Container>
      <GroupedCard left content={CONTENT.GRPD_CARD} />
    </>
  )
}
export default Introduction

import React, { useMemo } from 'react'
import Container from '../../components/containers/Container'
import Spacer from '../../utils/spacer/Spacer'
import Font from '../../utils/fonts/Font'
import FooterCards from '../../components/cards/layouts/FooterCards'
import CONTENT_APP from "../../App.content"
import Sidelines from '../../utils/sidelines/Sidelines'
import Grid from '../../utils/grids/Grid'

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/Guidelines!
 * 
 * TODO:
 * Mount the page when all components exist
 * 
 */
const Homepage: React.FC = () => {
  const content = useMemo(() => CONTENT_APP, [])

  return (
    <>
      <Grid />
      <Sidelines />
      <Spacer contained height={104} />
      <Container>
        <Spacer height={184} />
        <Font type="h1">Digital designer based in New York – currently redefining modern video workflow at Frame.io</Font>
        <Spacer height={80} />
      </Container>
      <FooterCards content={content.FOOTER_CARDS} />
    </>
  )
}

export default Homepage

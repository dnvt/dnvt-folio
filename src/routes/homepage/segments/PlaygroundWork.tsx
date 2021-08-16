import React, { useMemo } from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Container from "../../../components/containers/Container"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import Card from "../../../components/cards/Card"
import HOMEPAGE_CONTENT from "../Homepage.content"


const PlayGround: React.FC = () => {
  const window = useWindowSize()

  const CONTENT = useMemo(() => HOMEPAGE_CONTENT.PLAYGROUND, [])

  return (
    <>
      <Container>
        <Font type='h2'>Play Ground</Font>
        <Spacer height={window.width > 767 ? 104 : 40} />
      </Container>
      <Card {...CONTENT.GROUP_ANIM}>
        A Park for the Homeless<br />in the stars
      </Card>
      <Spacer height={40} />
      <Card {...CONTENT.GROUP_COVER} >
        Coverjs
      </Card>
      <Spacer height={40} />
      <Card
        height={216}
        noHover
        tag={CONTENT.GROUP_.tag}
        path={CONTENT.GROUP_.path}
      >
        Coming soon
      </Card>
    </>
  )
}

export default PlayGround

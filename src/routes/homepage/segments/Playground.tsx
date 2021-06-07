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
        <Card
          tag={CONTENT.GROUP_ANIM.tag}
          src={CONTENT.GROUP_ANIM.src}
          alt={CONTENT.GROUP_ANIM.alt}
          path={CONTENT.GROUP_ANIM.path}
        >
          A Park for the Homeless<br />in the stars
        </Card>
        <Spacer height={40} />
        <Card
          tag={CONTENT.GROUP_COVER.tag}
          src={CONTENT.GROUP_COVER.src}
          alt={CONTENT.GROUP_COVER.alt}
          path={CONTENT.GROUP_COVER.path}
        >
          Coverjs
        </Card>
        <Spacer height={40} />
        <Card
          height={216}
          tag={CONTENT.GROUP_.tag}
          path={CONTENT.GROUP_.path}
        >
          Coming soon
        </Card>
      </Container>
    </>
  )
}

export default PlayGround

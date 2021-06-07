import React, { useMemo } from "react"
import Container from "../../../components/containers/Container"
import Font from "../../../utils/fonts/Font"
import Column from "../../../components/containers/Column"
import Spacer from "../../../utils/spacer/Spacer"
import DragCardsThree from "../../../components/cards/layouts/DragCardThree"
import HOMEPAGE_CONTENT from "../Homepage.content"

const PrivateWork: React.FC = () => {
  const CONTENT = useMemo(() => HOMEPAGE_CONTENT.PRIVATE_WORK, [])

  return (
    <>
      <Container>
        <Font type='h4'>Protected work</Font>
        <Column spacer="third">
          <Font type='text'>
            As a freelancer in Berlin, I worked on several NDA projects as an
            interaction and motion designer. I defined and unified the behavior
            for interfaces on mediums like airplane seats, cookwear and TV
            screens.
            <br /> Contact me to learn more about these projects.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <DragCardsThree content={CONTENT} />
    </>
  )
}

export default PrivateWork

import React, { useMemo } from "react"
import Container from "../../../components/containers/Container"
import Font from "../../../utils/fonts/Font"
import Column from "../../../components/containers/Column"
import Spacer from "../../../utils/spacer/Spacer"
import GroupedCard from "../../../components/cards/layouts/GroupedCards"
import SpacerFortyHalf from "../../../utils/spacer/variations/SpacerFortyHalf"
import Card from "../../../components/cards/Card"
import HOMEPAGE_CONTENT from "../Homepage.content"


const SelectedWork: React.FC = () => {
  const CONTENT = useMemo(() => HOMEPAGE_CONTENT.SELECTED_WORK, [])

  return (
    <>
      <Container>
        <Font type='h4'>Selected</Font>
        <Column spacer="third">
          <Font type='text'>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Sed posuere consectetur est at lobortis. Etiam porta sem
            malesuada magna mollis euismod.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <GroupedCard content={CONTENT.GRPD_CARD_FIRST} />
      <SpacerFortyHalf />
      <Card {...CONTENT.CARD_LOVE}>
        Love your waste
      </Card>
      <SpacerFortyHalf />
      <GroupedCard left content={CONTENT.GRPD_CARD_SECOND}
      />
    </>
  )
}

export default SelectedWork

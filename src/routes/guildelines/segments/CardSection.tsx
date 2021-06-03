import React, { useMemo } from "react"
import Card from "../../../components/cards/Card"
import DragCardsThree from "../../../components/cards/layouts/DragCardThree"
import FooterCards from "../../../components/cards/layouts/FooterCards"
import GroupedCard from "../../../components/cards/layouts/GroupedCards"
import Spacer from "../../../utils/spacer/Spacer"
import SpacerFortyHalf from "../../../utils/spacer/variations/SpacerFortyHalf"
import CONTENT_APP from "../Guidelines.content"

const CardSection: React.FC = () => {
  const content = useMemo(() => CONTENT_APP, [])


  return (
    <>
      <SpacerFortyHalf />
      <Card
        tag={{ value: 'Programming' }}
        src={["", ""]}
        alt=""
        path='/'
      >
        Test of this title
      </Card>
      <Spacer contained height={32} />
      <Card
        right
        tag={{ value: 'Programming' }}
        src={["", ""]}
        alt=""
        path='/'
      >
        Test of this title
      </Card>
      <Spacer contained height={80} />
      <DragCardsThree
        content={content.THREE_CARDS}
      />
      <Spacer contained height={80} />
      <GroupedCard
        content={content.GROUPED_CARDS}
      />
      <SpacerFortyHalf />
      <GroupedCard
        left
        content={content.GROUPED_CARDS}
      />
      <Spacer contained height={80} />
      <FooterCards content={content.FOOTER_CARDS} />
    </>
  )
}

export default CardSection

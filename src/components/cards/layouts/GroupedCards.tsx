import React from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Spacer from "../../../utils/spacer/Spacer"
import Container from "../../containers/Container"
import Card, { STuples } from "../Card"
import { CardStatusType } from "../segments/CardStatus"

interface CardGroupedProps {
  key: number
  src: STuples
  alt: string
  status?: CardStatusType
  title?: { value: string, color?: string }
  tag: { color?: string, value: string }
  background?: "alert" | "brand" | "transparent"
  path?: string
  href?: string
  height?: number
  reverse?: Boolean
  left?: Boolean
}

interface GroupedCardProps { content: GroupedContentType, left?: Boolean }
export type GroupedContentType = [CardGroupedProps, CardGroupedProps]

const GroupedCard: React.FC<GroupedCardProps> = ({ content, left }) => {
  const window = useWindowSize()

  const cardGroup = content.map(CardUnit)

  if (window.width < 991)
    return (
      <Container>
        {cardGroup[0]}
        <Spacer height={32} />
        {cardGroup[1]}
      </Container>
    )

  if (left) return <Container type="group" left>{cardGroup}</Container>
  return <Container type="group">{cardGroup}</Container>
}

//

const CardUnit: React.FC<CardGroupedProps> = (props) => {
  const { key, status, src, alt, path, href, tag, background, title, height } = props

  return (
    <Card
      uncontained
      key={key}
      src={src}
      alt={alt}
      tag={tag}
      background={background}
      status={status}
      path={path}
      href={href}
      width="100%"
      height={height}
    >
      { title!.value}
    </Card >
  )
}

export default GroupedCard

import React from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Container from "../../containers/Container"
import Card, { STuples } from "../Card"
import { CardStatusType } from "../segments/CardStatus"

interface CardPropsType {
  key: number
  src: STuples
  alt: string
  status?: CardStatusType
  tag: {
    value: string
    color?: string
  }
  title: {
    value: string
    color?: string
  }
  background?: "alert" | "brand" | "transparent"
  path?: string
}

export type ThreeCardsContentType = [CardPropsType, CardPropsType, CardPropsType]
interface ThreeCardsProps { content: ThreeCardsContentType }

const DragCardsThree: React.FC<ThreeCardsProps> = ({ content }) => {
  let cardGroup = content.map(ThreeDevices)

  return <Container drag="three">{cardGroup}</Container>

}

const ThreeDevices: React.FC<CardPropsType> = (props) => {
  const window = useWindowSize()
  const { status, src, alt, path, title, tag, key, background } = props

  let cardWidth = 288
  if (window.width > 992) cardWidth = 448
  if (window.width > 1360) cardWidth = 544

  return (
    <Card
      uncontained
      key={key}
      status={status}
      src={src}
      alt={alt}
      path={path}
      tag={tag}
      background={background}
      width={cardWidth}
    >
      {title.value}
    </Card>
  )
}

export default DragCardsThree

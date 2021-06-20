import React from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Container from "../../containers/Container"
import Card, { ProjectColor, STuples } from "../Card"
import { CardStatusType } from "../segments/CardStatus"

interface CardPropsType {
  key: number
  alt: string
  src: STuples
  srcDark?: STuples
  srcMobile?: STuples
  path?: string
  href?: string
  status?: CardStatusType
  tag: {
    value: string
    color?: ProjectColor
  }
  title: {
    value: string
    color?: ProjectColor
  }
  background?: ProjectColor
}

export type ThreeCardsContentType = [CardPropsType, CardPropsType, CardPropsType]
interface ThreeCardsProps { content: ThreeCardsContentType }

const DragCardsThree: React.FC<ThreeCardsProps> = ({ content }) => {
  let cardGroup = content.map(ThreeDevices)

  return <Container drag="three">{cardGroup}</Container>

}

const ThreeDevices: React.FC<CardPropsType> = (props) => {
  const window = useWindowSize()
  const { status, src, alt, path, title, tag, href, key, background } = props

  let cardWidth = 288
  if (window.width > 992) cardWidth = 448
  if (window.width > 1360) cardWidth = 544

  return (
    <Card
      uncontained
      noHover
      key={key}
      status={status}
      src={src}
      alt={alt}
      path={path}
      href={href}
      tag={tag}
      title={title}
      background={background}
      width={cardWidth}
    >
      {title.value}
    </Card>
  )
}

export default DragCardsThree

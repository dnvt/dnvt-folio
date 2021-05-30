import React from "react"
import Container from "../../containers/Container"
import { STuples } from "../../devices/layouts/DragFramelessFive"
import Card from "../Card"
import { CardStatusType } from "../segments/CardStatus"


interface CardPropsType {
  key: number
  src: STuples
  alt: string
  status?: CardStatusType
  title?: {
    value: string
    color?: string
  }
  background?: {
    color?: string
    hover?: string
  }
  reverse?: Boolean
  path?: string
}

export type FooterContentType = [CardPropsType, CardPropsType, CardPropsType]
interface FooterCardProps { content: FooterContentType }

////////////////////////////////////////////////////////////////////////////////

const FooterCards: React.FC<FooterCardProps> = ({ content }) => {
  const cardGroup = content.map(CardUnit)

  return <Container type="footer">{cardGroup}</Container>
}

const CardUnit = (props: CardPropsType) => {
  const { status, src, alt, path, title, key, reverse, background } = props

  return (
    <Card
      uncontained
      key={key}
      reverse={reverse}
      status={status}
      src={src}
      alt={alt}
      path={path}
      title={{ color: title?.color }}
      background={{ color: background?.color }}
    >
      { title!.value}
    </Card >
  )
}

export default FooterCards

import React from "react"
import Container from "../../containers/Container"
import Card, { STuples } from "../Card"
import { CardStatusType } from "../segments/CardStatus"

interface CardPropsType {
  key: number
  path: string
  src: STuples
  alt: string
  status?: CardStatusType
  title: {
    value: string
    color?: string
  }
  background?: "alert" | "brand" | "transparent"
  reverse?: Boolean
}

export type FooterContentType = [CardPropsType, CardPropsType, CardPropsType,]
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
      background={background}
    >
      { title!.value}
    </Card >
  )
}

export default FooterCards

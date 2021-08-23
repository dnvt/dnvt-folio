import React from "react"
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
  tag?: {
    value: string
    color?: ProjectColor
  }
  title: {
    value: string
    color?: ProjectColor
  }
  background?: ProjectColor
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
      {title!.value}
    </Card >
  )
}

export default FooterCards

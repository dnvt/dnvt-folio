import React from "react"
import { useTheme } from "theming"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Spacer from "../../../utils/spacer/Spacer"
import { Theme } from "../../../utils/theme/theme"
import Container from "../../containers/Container"
import { STuples } from "../../devices/layouts/DragFramelessFive"
import Card from "../Card"
import { CardStatusType } from "../segments/CardStatus"

interface GroupedCardProps {
  src: [STuples, STuples]
  alt: string[]
  tag: { color?: string[], value: string[] }
  title: { color?: string[], value: string[] }
  background?: { color: string }
  status?: CardStatusType[]
  height?: number
  path?: string
  href?: string
  left?: Boolean
}

const GroupedCard: React.FC<GroupedCardProps> = (props) => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const { status, src, alt, path, href, tag, background, title, height, left } = props

  let cardGroup = []
  for (let i = 0; i < 2; i++) {
    cardGroup.push(
      <Card
        key={i}
        src={src[i]}
        alt={alt[i]}
        tag={{ value: tag.value[i], color: tag.color && tag?.color[i] }}
        background={{ color: background?.color[i] ?? theme.background.empty }}
        status={status && status[i]}
        path={path && path[i]}
        href={href && href[i]}
        width="100%"
        height={height}
        uncontained
      >
        {title.value[i]}
      </Card>
    )
  }

  if (window.width < 992)
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

export default GroupedCard

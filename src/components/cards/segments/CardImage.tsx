import React from "react"
import { Link } from "react-router-dom"
import { useWindowSize } from "../../../hooks/useWindowSize"
import ImageContainer from "../../../ui/images/Image"
import CardStyle from "../card-style"

interface CardImageProps {
  src: [string, string]
  alt: string
  scale: number
  opacity: number
  status?: string
  background?: string
  path?: string
  href?: string
  paddingB?: number
}

const CardImage: React.FC<CardImageProps> = (props) => {
  const classes = CardStyle()
  const window = useWindowSize()

  const { background, paddingB, opacity, scale, src, alt, status, path, href } = props

  const cardImage = (
    <div
      className={classes.CardImage}
      style={
        window.width > 768
          ? { background: background }
          : { background: background, paddingBottom: paddingB }
      }
    >
      {src && (
        <ImageContainer
          card
          scale={scale}
          opacity={opacity}
          src={src}
          alt={alt}
        />
      )}
    </div>
  )

  // This condition might change when I implement password checkin
  if (status == "stop") return cardImage
  if (status == "construction") return cardImage
  if (path) return <Link to={path}>{cardImage}</Link>

  return <a href={href} target='_blank' rel='noopener noreferrer'>{cardImage}</a>
}

export default CardImage

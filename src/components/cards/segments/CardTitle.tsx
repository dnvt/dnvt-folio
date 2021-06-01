import React from "react"
import { useTheme } from "theming"
import Font from "../../../utils/fonts/Font"
import { Theme } from "../../../utils/theme/theme"
import CardStyle from "../card-style"

interface CardTitleProps {
  hover: Boolean
  tagValue?: string
  titleColor?: string
  tagColor?: string
  right?: Boolean
  reverse?: Boolean
}

const CardTitle: React.FC<CardTitleProps> = (props) => {
  const theme: Theme = useTheme()
  const classes = CardStyle()

  const { right, reverse, hover, tagColor, titleColor, tagValue, children } = props

  return (
    <>
      <div
        className={right ? classes.projectTitleRight : classes.projectTitle}
        style={reverse && { transform: "scaleX(-1)", right: "0" }}
      >
        <Font type='h5' style={{ color: tagColor ?? theme.text.secondary, margin: '0 0 -8px 0' }}>
          {tagValue}
        </Font>
        <Font type='h3' animation={hover} style={{ color: titleColor ?? theme.text.primary }}>
          {children}
        </Font>
      </div>
    </>
  )
}

export default CardTitle

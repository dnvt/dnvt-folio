import React from "react"
import { useTheme } from "theming"
import Font from "../../../utils/fonts/Font"
import { Theme } from "../../../utils/theme/theme"

import { ProjectColor } from "../Card"
import CardStyle from "../card-style"

interface CardTitleProps {
  hover: Boolean
  tagValue?: string
  titleColor?: ProjectColor
  tagColor?: ProjectColor
  right?: Boolean
  reverse?: Boolean
}

const CardTitle: React.FC<CardTitleProps> = (props) => {
  const theme: Theme = useTheme()
  const classes = CardStyle()

  const { right, reverse, hover, tagColor, titleColor, tagValue, children } = props

  let colorTag = setTagColor()
  let colorTitle = setTitleColor()

  return (
    <>
      <div
        className={right ? classes.projectTitleRight : classes.projectTitle}
        style={reverse && { transform: "scaleX(-1)", right: "0" }}
      >
        <Font type='h5' style={{ color: colorTag, margin: '0 0 -8px 0' }}>
          {tagValue}
        </Font>
        <Font type='h3' animation={hover} style={{ color: colorTitle ?? theme.text.primary }}>
          {children}
        </Font>
      </div>
    </>
  )

  //

  function setTagColor() {
    if (tagColor == "usmobile") return theme.projects.usmobile.text
    if (tagColor == "norse") return theme.projects.norse.text
    if (tagColor == "waste") return theme.projects.waste.text
    if (tagColor == "elastic") return theme.projects.elastic.text
    if (tagColor == "mimi") return theme.projects.mimi.text
    if (tagColor == "kipfit") return theme.projects.kipfit.text
    if (tagColor == "stars") return theme.projects.stars.text
    if (tagColor == "main") return theme.text.hover
    if (tagColor == "white") return theme.constant.white
    if (tagColor == "black") return theme.constant.black
    else return theme.text.primary

  }

  function setTitleColor() {
    if (titleColor == "usmobile") return theme.projects.usmobile.text
    if (titleColor == "white") return theme.constant.white
    if (titleColor == "black") return theme.constant.black
    else return theme.text.primary

  }
}

export default CardTitle

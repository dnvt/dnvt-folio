import React from "react"
import FontTagWrapper from "./elements/FontTagWrapper"
import { FontTagWrapperProps } from "./Font-props"

const Font: React.FC<FontTagWrapperProps> = (props) => {
  const { children, type, animation, style } = props

  return <FontTagWrapper type={type} style={style} animation={animation}>{children}</FontTagWrapper>
}

export default Font
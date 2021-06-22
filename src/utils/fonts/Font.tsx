import React from "react"
import FontTagWrapper from "./elements/FontTagWrapper"
import { FontTagWrapperProps } from "./Font-props"

const Font: React.FC<FontTagWrapperProps> = (props) => {
  const { children, animation, type, style } = props
  return <FontTagWrapper animation={animation} type={type} style={style}>{children}</FontTagWrapper>
}

export default Font
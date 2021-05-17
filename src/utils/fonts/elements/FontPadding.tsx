import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { Theme } from "../../theme/theme"
import Spacer from "../../spacer/Spacer"
import FontSpacing from "../FontSpacing"
import { FontPaddingProps, FontTypes } from "../Font-props"

const FontPadding: React.FC<FontPaddingProps> = (props): JSX.Element => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const FONTSPACING = FontSpacing(window)

  const { type, children } = props

  return (
    <>
      <Spacer borderLess height={FONTSPACING[type].top} bg={filteringOutBigTypes(type)} />
      {children}
      <Spacer borderLess height={FONTSPACING[type].bottom} bg={filteringOutBigTypes(type)} />
    </>
  )

  //

  function filteringOutBigTypes(type: FontTypes) {
    if (type !== "h2" && type !== "hero") return theme.grid.fill
  }
}

export default FontPadding

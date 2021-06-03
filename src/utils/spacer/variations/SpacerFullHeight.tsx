import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { Theme } from "../../theme/theme"
import Spacer, { HeightType } from "../Spacer"

const SpacerFullHeight: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  let height: HeightType = 40
  let width: number | "100%" = "100%"

  if (window.width > 1359) height = 736; width = 80
  if (window.width > 991) height = 600; width = 64

  return <Spacer height={height} width={width} bg={theme.grid.fill} />
}

export default SpacerFullHeight

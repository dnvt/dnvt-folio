import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { Theme } from "../../theme/theme"
import Spacer from "../Spacer"

const SpacerFullHeight: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  if (window.width > 1359)
    return <Spacer height={736} width={80} bg={theme.grid.fill} />

  if (window.width > 991)
    return <Spacer height={600} width={64} bg={theme.grid.fill} />

  return <Spacer height={40} width='100%' bg={theme.grid.fill} />

}

export default SpacerFullHeight

/**
 * Welcome to @dnvt/icon-button!
 */

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "theming"
import { Theme } from "../../utils/theme/theme"
import GridToggleIcon from "./variants/GridToggleIcon"
import ThemeToggleIcon from "./variants/ThemeToggleIcon"
import MenuToggleIcon from "./variants/MenuToggleIcon"
import MenuButtonStyle from "./Buttons-style"
import Tooltip from "../tooltips/Tooltip"

export type IconButtonType = "grid" | "light" | "menu"
interface IconButtonProps {
  icon: IconButtonType
  tooltip?: string
}

////////////////////////////////////////////////////////////////////////////////

const IconButton: React.FC<IconButtonProps> = ({ icon, tooltip }) => {
  const classes = MenuButtonStyle()
  const theme: Theme = useTheme()
  const [iconHover, setIconHover] = useState<Boolean>(false)

  const hover = theme.text.hover
  const primary = theme.text.primary
  const hoverAnimation = iconHover ? hover : primary

  let iconComponent: JSX.Element | undefined

  if (icon == "grid") iconComponent = <GridToggleIcon color={hoverAnimation} />
  if (icon == "light") iconComponent = <ThemeToggleIcon color={hoverAnimation} />
  if (icon == "menu") iconComponent = <MenuToggleIcon color={hoverAnimation} />

  let menuTooltip: JSX.Element | undefined
  if (tooltip && iconHover) menuTooltip = <Tooltip value={tooltip} />

  return (
    <motion.div
      className={classes.icon}
      onHoverStart={() => setIconHover(iconHover => !iconHover)}
      onHoverEnd={() => setIconHover(iconHover => !iconHover)} >
      {iconComponent}
      {menuTooltip}
    </motion.div>)


}

export default IconButton
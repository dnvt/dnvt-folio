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

export type IconButtonType = "grid" | "light" | "menu"

////////////////////////////////////////////////////////////////////////////////

const IconButton: React.FC<{ icon: IconButtonType }> = ({ icon }) => {
  const classes = MenuButtonStyle()
  const theme: Theme = useTheme()
  const [iconColor, setIconColor] = useState<Boolean>(false)

  const hover = theme.text.hover
  const primary = theme.text.primary
  const hoverAnimation = iconColor ? hover : primary

  let iconComponent: JSX.Element | undefined

  if (icon == "grid") iconComponent = <GridToggleIcon color={hoverAnimation} />
  if (icon == "light") iconComponent = <ThemeToggleIcon color={hoverAnimation} />
  if (icon == "menu") iconComponent = <MenuToggleIcon color={hoverAnimation} />

  return (
    <motion.div
      className={classes.icon}
      onHoverStart={() => setIconColor(iconColor => !iconColor)}
      onHoverEnd={() => setIconColor(iconColor => !iconColor)} >
      {iconComponent}
    </motion.div>)


}

export default IconButton
/**
 * Welcome to @dnvt/icon-button!
 */

import React, { useState } from "react"
import GridToggleIcon from "./variants/GridToggleIcon"
import ThemeToggleIcon from "./variants/ThemeToggleIcon"
import MenuButtonStyle from "./Buttons-style"
import { motion } from "framer-motion"
import { Theme } from "../../utils/theme/theme"
import { useTheme } from "theming"
import Icon, { ShapesTypes } from "../../utils/icons/Icon"

type iconButtonType = {
  icon: ShapesTypes
  path: string
  animation?: {}
}

////////////////////////////////////////////////////////////////////////////////

const IconButton: React.FC<iconButtonType> = ({ icon }) => {
  const classes = MenuButtonStyle()
  const theme: Theme = useTheme()
  const [iconColor, setIconColor] = useState(false)

  const hover = theme.text.hover
  const primary = theme.text.primary
  const hoverAnimation = iconColor ? hover : primary

  let iconComponent: JSX.Element | undefined

  if (icon == "grid") iconComponent = <GridToggleIcon color={hoverAnimation} />
  if (icon == "light") iconComponent = <ThemeToggleIcon color={hoverAnimation} />
  else iconComponent = <Icon color={hoverAnimation} name={icon} />

  return (
    <motion.div
      className={classes.icon}
      onHoverStart={() => setIconColor(iconColor => !iconColor)}
      onHoverEnd={() => setIconColor(iconColor => !iconColor)} >
      {iconComponent}
    </motion.div>)


}

export default IconButton
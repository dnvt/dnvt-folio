/**
 * Welcome to @dnvt/icon-button!
 */

import React from "react"
import Icon, { ShapesTypes } from "../../utils/icons/Icon"
import GridToggleIcon from "./variants/GridToggleIcon"
import ThemeToggleIcon from "./variants/ThemeToggleIcon"
import MenuButtonStyle from "./Buttons-style"
import { motion } from "framer-motion"

type iconButtonType = {
  icon: ShapesTypes
  path: string
}

////////////////////////////////////////////////////////////////////////////////

const IconButton: React.FC<iconButtonType> = (props) => {
  const classes = MenuButtonStyle()
  const { icon, path } = props

  if (icon == "grid") return iconWrapper(<GridToggleIcon />)
  if (icon == "light") return iconWrapper(<ThemeToggleIcon />)
  else return linkWrapper(<Icon name={icon} />)

  //

  function iconWrapper(Icon: JSX.Element) {
    return <motion.div className={classes.icon}>{Icon}</motion.div>
  }

  function linkWrapper(Icon: JSX.Element) {
    return <a href={path} className={classes.MenuButton}>{iconWrapper(Icon)}</a>
  }
}

export default IconButton
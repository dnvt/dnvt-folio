/**
 * Welcome to @dnvt/button!
 */

import React, { useState } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import Font from "../../utils/fonts/Font"
import Underline from "../../utils/line/Underline"
import MenuButtonStyle from "./Buttons-style"
import Icon, { ShapesTypes } from "../../utils/icons/Icon"
import Tooltip from "../tooltips/Tooltip"
import { motion } from "framer-motion"

type ButtonProps = {
  path?: string
  icon?: ShapesTypes
  hover?: ShapesTypes
  tooltip?: string
}

////////////////////////////////////////////////////////////////////////////////

const Button: React.FC<ButtonProps> = (props) => {
  const theme: Theme = useTheme()
  const classes = MenuButtonStyle({ ...props, theme })
  const [iconHover, setIconHover] = useState(false)

  const { path, icon, hover, tooltip, children } = props

  let iconComponent: JSX.Element | undefined
  if (icon) iconComponent = iconWrapper(<Icon name={iconHover ? hover || icon : icon} />)

  let tooltipComponent: JSX.Element | undefined
  if (tooltip) tooltipComponent = <Tooltip value={tooltip} />

  return (
    <motion.a
      href={path}
      aria-disabled={path ? "false" : "true"}
      className={classes.MenuButton}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onHoverStart={() => setIconHover(iconHover => !iconHover)}
      onHoverEnd={() => setIconHover(iconHover => !iconHover)}
    >
      {iconComponent}
      <div>
        <Font type='menu'>
          {children}
        </Font>
        <Underline button opacity={iconHover ? 1 : 0} />
      </div>
      {tooltipComponent}
    </motion.a>
  )

  ////////////////////////////////////////////////////////////////////////////////
  // Animation values

  function iconWrapper(Icon: JSX.Element) {
    return <div className={classes.icon} style={{ marginRight: "8px" }}>{Icon}  </div>
  }
}

export default Button

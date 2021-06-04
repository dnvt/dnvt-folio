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
import { Link } from "react-router-dom"
import { useMenuVisibility } from "../../hooks/useMenuVisibility"

type ButtonProps = {
  path: string
  icon?: ShapesTypes | [ShapesTypes, ShapesTypes]
  tooltip?: string
  menuToggle?: Boolean
}

////////////////////////////////////////////////////////////////////////////////

const Button: React.FC<ButtonProps> = (props) => {
  const theme: Theme = useTheme()
  const [menu, setMenu] = useMenuVisibility()
  const [iconHover, setIconHover] = useState(false)
  const classes = MenuButtonStyle({ ...props, theme })

  const { path, icon, tooltip, menuToggle, children } = props

  let iconComponent: JSX.Element | undefined
  if (typeof (icon) == "string") iconComponent = iconWrapper(<Icon name={icon} />)
  if (Array.isArray(icon)) iconComponent = iconWrapper(<Icon name={iconHover ? icon[1] || icon : icon[0]} />)

  let tooltipComponent: JSX.Element | undefined
  if (tooltip) tooltipComponent = <Tooltip value={tooltip} />

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => menuToggle && setMenu(!menu)}

      onHoverStart={() => setIconHover(iconHover => !iconHover)}
      onHoverEnd={() => setIconHover(iconHover => !iconHover)}>
      <Link
        to={path}
        aria-disabled={path ? "false" : "true"}
        className={classes.MenuButton}
      >
        {iconComponent}
        <div>
          <Font type='menu'>
            {children}
          </Font>
          <Underline button opacity={iconHover ? 1 : 0} />
        </div>
        {tooltipComponent}
      </Link>
    </motion.div>
  )

  ////////////////////////////////////////////////////////////////////////////////
  // Animation values

  function iconWrapper(Icon: JSX.Element) {
    return <div className={classes.icon} style={{ marginRight: "8px" }}>{Icon}  </div>
  }
}

export default Button

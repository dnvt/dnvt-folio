import React from "react"
import Icon from "../../../utils/icons/Icon"
import GridToggleIcon from "../../buttons/variants/GridToggleIcon"
import { ShapesTypes } from "../../../utils/icons/Icon"
import ThemeToggleIcon from "../../buttons/variants/ThemeToggleIcon"
import ButtonStyle from "../../buttons/Buttons-style"

export type iconButtonType = {
  name: ShapesTypes,
  path: string,
  value?: Boolean
}

const IconButton: React.FC<iconButtonType> = (props) => {
  const classes = ButtonStyle()
  const { name, value, path } = props

  if (name == "grid") return iconWrapper(<GridToggleIcon />)
  if (name == "light") return iconWrapper(<ThemeToggleIcon />)
  else return linkWrapper(<Icon name={name} />)

  //

  function iconWrapper(Icon: JSX.Element) {
    return <div className={classes.icon} style={value && { marginRight: "8px" }}>{Icon}</div>
  }

  function linkWrapper(Icon: JSX.Element) {
    return <a href={path} className={classes.MenuButton}>{iconWrapper(Icon)}</a>
  }
}

export default IconButton
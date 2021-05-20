import React from "react"

import { useTheme } from "react-jss"
import { Theme } from "../theme/theme"
import SidelinesStyle from "./Sidelines-style"

const Sidelines: React.FC = (props) => {
  const theme: Theme = useTheme()
  const classes = SidelinesStyle({ ...props, theme })

  return <div className={classes.sidelines}></div>
}

export default Sidelines
/**
 * Welcome to @dnvt/tooltip!
 */

import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import Font from "../../utils/fonts/Font"
import TooltipStyle from "./Tooltip-style"

type TooltipProps = { value: string }

////////////////////////////////////////////////////////////////////////////////

const Tooltip: React.FC<TooltipProps> = ({ value }) => {
  const theme: Theme = useTheme()
  const classes = TooltipStyle({ theme })

  return (
    <div className={classes.Tooltip}>
      <Font type='tooltip'>{value}</Font>
    </div>
  )
}

export default Tooltip

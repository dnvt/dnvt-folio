/**
 * Welcome to @dnvt/tooltip!
 */

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import Font from "../../utils/fonts/Font"
import TooltipStyle from "./Tooltip-style"

type TooltipProps = { value: string, parentWidth?: number }

////////////////////////////////////////////////////////////////////////////////

const Tooltip: React.FC<TooltipProps> = ({ value, parentWidth }) => {
  const theme: Theme = useTheme()
  const classes = TooltipStyle({ theme })
  const tooltipElement = useRef(null as any)

  const [animation, setAnimation] = useState(false)
  const [width, setWidth] = useState(0)

  const parentContainerWidth = parentWidth ? parentWidth : 12

  useEffect(() => {
    setAnimation(true)
    setWidth(tooltipElement.current.offsetWidth)
    return () => {
      setAnimation(false)
    }
  }, [])

  return (
    <div className={classes.positioning} style={{ marginLeft: -width * .5 + parentContainerWidth }} >
      <div
        ref={tooltipElement}
        className={classes.Tooltip}
        style={{
          opacity: animation ? 1 : 0,
          transform: animation ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity .12s ease, transform .12s ease"
        }}>
        <Font type='tooltip'>{value}</Font>
      </div>
    </div>
  )
}

export default Tooltip

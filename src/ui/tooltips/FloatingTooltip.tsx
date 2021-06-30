import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../hooks/useWindowSize"
import Font from "../../utils/fonts/Font"
import { Theme } from "../../utils/theme/theme"
import TooltipStyle from "./Tooltip-style"

const FloatingTooltip: React.FC<{ hover: Boolean }> = ({ hover }) => {
  const theme: Theme = useTheme()
  const classes = TooltipStyle({ theme })
  const window = useWindowSize()


  return (
    <div
      className={classes.positioning}
      style={{
        zIndex: 100,
        opacity: hover ? 1 : 0,
        top: position().top,
        left: position().left,
        transform: hover ? "translateY(0)" : "translateY(-12px)",
        transition: "opacity .12s ease, transform .12s ease",
      }} >
      <div className={classes.Tooltip}>
        <Font type='tooltip'>Page under construction</Font>
      </div>
    </div>
  )
  function position(): { top: number, left: number } {
    if (window.width > 1359) return { left: 40, top: 80 }
    if (window.width > 991) return { left: 40, top: 48 }
    if (window.width > 767) return { left: 40, top: 40 }
    else return { left: 16, top: 24 }
  }
}


export default FloatingTooltip
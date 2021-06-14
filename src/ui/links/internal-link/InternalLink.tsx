
import React, { useState } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../../utils/theme/theme"
import Font from "../../../utils/fonts/Font"
import Underline from "../../../utils/line/Underline"
import { motion } from "framer-motion"
import { LinkProps } from "../link-types"
import InternalLinkStyle from "./InternalLink-style"
import { Link } from "react-router-dom"

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/internal-link!
 */
const InternalLink: React.FC<LinkProps> = ({ path, children }) => {
  const classes = InternalLinkStyle()
  const theme: Theme = useTheme()
  const [fontColor, setFontColor] = useState<Boolean>(false)

  const hover = theme.text.hover
  const primary = theme.text.primary
  const hoverAnimation = fontColor ? hover : primary

  return (
    <motion.div
      className={classes.internal}
      onHoverStart={() => setFontColor(fontColor => !fontColor)}
      onHoverEnd={() => setFontColor(fontColor => !fontColor)} >
      <div className={classes.inside}>
        <Link to={path}>
          <Font type='link' style={{ color: hoverAnimation }}>
            {children}
          </Font>
        </Link>
      </div>
      <Underline opacity={1} color={hoverAnimation} />
    </motion.div>
  )
}

export default InternalLink

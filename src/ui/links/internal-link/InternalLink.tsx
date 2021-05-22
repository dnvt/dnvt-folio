/**
 * Welcome to @dnvt/internal-link!
 * 
 * TODO:
 * Add the Router Link component when starting to use it
 * 
 */

import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../../utils/theme/theme"
import Font from "../../../utils/fonts/Font"
import Underline from "../../../utils/line/Underline"
import InternalLinkStyle from "./InternalLink-style"
import { motion } from "framer-motion"
import { LinkProps } from "../link-types"

////////////////////////////////////////////////////////////////////////////////

const InternalLink: React.FC<LinkProps> = (props) => {
  const classes = InternalLinkStyle()
  const theme: Theme = useTheme()
  const { path, value } = props

  return (
    <motion.div className={classes.internal} initial="rest" whileHover="hover" animate="rest" >
      <div className={classes.inside}>
        <a href={path}>
          <Font type='link' animation={fontAnim()}>
            {value}
          </Font>
        </a>
      </div>
      <Underline opacity={1} animation={underlineAnim()} />
    </motion.div>
  )

  ////////////////////////////////////////////////////////////////////////////////
  // Animation values

  function fontAnim() {
    return ({
      rest: { color: theme.text.primary },
      hover: { color: theme.text.hover }
    })
  }

  function underlineAnim() {
    return ({
      rest: { background: theme.text.primary },
      hover: { background: theme.text.hover }
    })
  }
}

export default InternalLink

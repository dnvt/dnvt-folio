/**
 * Welcome to @dnvt/underline!
 */

import { motion } from "framer-motion"
import React from "react"
import { useTheme } from "theming"
import { Theme } from "../theme/theme"
import UnderlineStyle from "./Underline-style"

export type UnderlineProps = {
  opacity?: number
  animation?: {}
  button?: boolean
  internal?: boolean
  external?: boolean
}

////////////////////////////////////////////////////////////////////////////////

const Underline: React.FC<UnderlineProps> = ({ internal, external, button, animation, ...props }) => {
  const theme: Theme = useTheme()
  const classes = UnderlineStyle({ ...props, theme })

  let className = classes.Internal
  if (external) className = classes.External
  if (button) className = classes.Button

  return (
    <motion.div variants={animation}
      className={className}
    />
  )
}

export default Underline

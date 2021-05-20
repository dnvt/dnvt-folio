import { motion } from "framer-motion"
import React from "react"
import { useTheme } from "theming"
import { Theme } from "../theme/theme"
import UnderlineStyle from "./Underline-style"

export type UnderlineProps = {
  opacity?: string
  animation?: {}
  ext?: boolean
}

const Underline: React.FC<UnderlineProps> = ({ ext, animation, ...props }) => {
  const theme: Theme = useTheme()
  const classes = UnderlineStyle({ ...props, theme })

  return (
    <motion.div variants={animation}
      className={ext ? classes.SeparEx : classes.Separator}
    />
  )
}

export default Underline

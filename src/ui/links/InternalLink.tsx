import React from "react"
// import { Link } from "react-router-dom"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import Font from "../../utils/fonts/Font"
import Underline from "../../utils/line/Underline"
import InternalLinkStyle from "./InternalLink-style"
import { motion } from "framer-motion"

type InternalLinkProps = {
  path: string,
  value: string
}

const InternalLink: React.FC<InternalLinkProps> = (props) => {
  const classes = InternalLinkStyle()
  const theme: Theme = useTheme()
  const { path, value } = props
  const fontAnim = {
    rest: { color: theme.text.primary },
    hover: { color: theme.text.hover }
  }
  const underlineAnim = {
    rest: { background: theme.text.primary },
    hover: { background: theme.text.hover }
  }


  return (
    <>
      <motion.div className={classes.internal} initial="rest" whileHover="hover" animate="rest" >
        <div className={classes.inside}>
          <a href={path}>
            <Font type='link' animation={fontAnim}>
              {value}
            </Font>
          </a>
        </div>
        <Underline opacity='1' animation={underlineAnim} />
      </motion.div>
    </>
  )
}

export default InternalLink

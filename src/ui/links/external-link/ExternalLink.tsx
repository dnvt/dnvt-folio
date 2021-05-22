/**
 * Welcome to @dnvt/external-link!
 */

import React from "react"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Icon from "../../../utils/icons/Icon"
import Underline from "../../../utils/line/Underline"
import { LinkProps } from "../link-types"
import ExternalLinkStyle from "./ExternalLink-style"
import { motion } from "framer-motion"

////////////////////////////////////////////////////////////////////////////////

const ExternalLink: React.FC<LinkProps> = (props) => {
  const classes = ExternalLinkStyle()
  const window = useWindowSize()
  const { path, value } = props

  // External link on Mobile => Full width
  const mobileSize = window.width! < 768
  const MobileLink = (
    <>
      <div className={classes.inside}>
        <a className={classes.link} href={path} target='_blank' rel='noopener noreferrer'>
          {value}
        </a>
        <div className={classes.iconRight}>
          <Icon name='link' />
        </div>
      </div>
      <Underline external opacity={1} />
    </>
  )

  // External Link for Desktop
  const DesktopLink = (
    <>
      <div className={classes.inside}>
        <motion.div className={classes.iconRight} variants={getIconLeftAnimValue()}>
          <Icon name='link' />
        </motion.div>
        <motion.a
          className={classes.link}
          variants={getTextAnimValue()}
          href={path}
          target='_blank'
          rel='noopener noreferrer'
        >
          {value}
        </motion.a>
        <motion.div className={classes.iconRight} variants={getIconRightAnimValue()}>
          <Icon name='link' />
        </motion.div>
      </div>
      <Underline external opacity={1} />
    </>
  )

  return (
    <motion.div className={classes.external} initial="rest" whileHover="hover" animate="rest">
      {mobileSize ? MobileLink : DesktopLink}
    </motion.div>
  )

  ////////////////////////////////////////////////////////////////////////////////
  // Animation values

  function getIconLeftAnimValue() {
    return ({
      rest: {
        marginRight: "0px",
        opacity: "0",
      },
      hover: {
        marginRight: "12px",
        opacity: "1",
      }
    })
  }

  function getIconRightAnimValue() {
    return ({
      rest: {
        opacity: "1",
        marginLeft: "12px",
      },
      hover: {
        opacity: "0",
        marginLeft: "-8px",
        marginRight: "8px"
      }
    })
  }

  function getTextAnimValue() {
    return ({
      rest: {
        marginLeft: "-24px",
        marginRight: "0",
      },
      hover: {
        marginLeft: "0",
        marginRight: "-24px",
      }
    })
  }
}

export default ExternalLink

import React from "react"
import { useTheme } from "react-jss"
import { useWindowSize } from "../../hooks/useWindowSize"
import Icon from "../icons/Icon"
import Spacer from "../spacer/Spacer"
import { Theme } from "../theme/theme"
import ArrowSignalsStyle from "./ArrowSignals-style"

type ArrowProps = {
  left?: Boolean
  big?: Boolean
}

const ArrowDragScroll: React.FC<ArrowProps> = (props) => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const classes = ArrowSignalsStyle({ ...props, theme })

  const { left, big } = props
  
  const bigScreen = window.width < 1820
  const smallScreen = window.width < 992

  if ((big && bigScreen) || smallScreen)
    return (
      <div className={left ? classes.aLeft : classes.aRight}>
        <Icon name='link' />
        <Spacer height={8} />
        <Icon name='link' />
        <Spacer height={8} />
        <Icon name='link' />
      </div>
    )

  // Desktop
  else return null
}

export default ArrowDragScroll

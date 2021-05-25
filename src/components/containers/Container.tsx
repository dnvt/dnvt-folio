/**
 * Welcome to @dnvt/Container!
 * 
 * TODO:
 * - Add conditional Prop types
 * - Question Heght props
 * 
 */

import React from "react"
import ContainerStyle from "./Container-style"

type ContainerType = {
  height?: Boolean
  big?: Boolean
  center?: Boolean
}

////////////////////////////////////////////////////////////////////////////////

const Container: React.FC<ContainerType> = (props) => {
  const classes = ContainerStyle()
  const { children, height, big, center } = props

  if (height) {
    return (
      <div className={classes.Container} style={{ height: "100%" }}>
        {children}
      </div>
    )
  }

  if (big)
    return (
      <div className={classes.BigContainer}>
        <div className={center ? classes.flexCenter : classes.flexAround}>
          {children}
        </div>
      </div>
    )

  // Default
  return <div className={classes.Container}>{children}</div>
}

export default Container
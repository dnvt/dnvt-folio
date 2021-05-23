import React from "react";
import ContainerStyle from "./Container-style";

type ContainerType = { height?: boolean }

const Container: React.FC<ContainerType> = (props) => {
  const classes = ContainerStyle()
  const { children, height } = props

  // TODO question the Height props
  if (height) {
    return (
      <div className={classes.Container} style={{ height: "100%" }}>
        {children}
      </div>
    );
  }

  // Default
  return <div className={classes.Container}>{children}</div>
}

export default Container
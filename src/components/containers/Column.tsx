import React from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import Verticaler from "../../utils/spacer/variations/Verticaler"
import ContainerStyle from "./Container-style"

interface ColumnType {
  grid?: Boolean
  spacer?: "half" | "third"
}

const Column: React.FC<ColumnType> = (props) => {
  const window = useWindowSize()
  const classes = ContainerStyle()

  const { grid, spacer, children } = props

  let spacerWidth: "100%"[] | number[] = ["100%", "100%"]
  if (window.width > 991) spacerWidth = [288, 448]
  if (window.width > 1359) spacerWidth = [352, 544]

  let spacerArrayCall = spacer == "half" ? spacerWidth[1] : spacerWidth[0]

  let emptyColumn
  if (spacer)
    if (window.width > 991)
      emptyColumn = <Verticaler width={spacerArrayCall} />

  return (
    <div className={spacer && classes.Column}>
      <div className={grid && classes.Column}>{children}</div>
      {emptyColumn}
    </div>
  )
}

export default Column

import React from "react"
import { useGridVisibility } from "../../hooks/useGridVisibility"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"

const Grid: React.FC = (props) => {
  const [visibility] = useGridVisibility()
  const grid = <><Vertical /><Horizontal /></>

  return (
    <>
      {visibility ? grid : null}
      {props.children}
    </>
  )
}

export default Grid
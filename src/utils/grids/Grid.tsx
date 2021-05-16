import React from "react"
import { useGridVisibility } from "../../hooks/useGridVisibility"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"

const Grid: React.FC = (props) => {
  const [visibility] = useGridVisibility()
  const { children } = props

  const grid = <><Vertical /><Horizontal /></>
  const gridComponent: JSX.Element = setGridVisibility()

  return <>{gridComponent}</>

  //

  function setGridVisibility() {
    return (
      <>
        {visibility ? grid : null}
        {children}
      </>
    )
  }
}

export default Grid
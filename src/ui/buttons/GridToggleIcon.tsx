import React from "react"
import { useGridVisibility } from "../../hooks/useGridVisibility"

const GridToggleIcon: React.FC = (props) => {
  const [visibility, setVisibility] = useGridVisibility()

  return (
    <button
      type='button'
      onClick={() => {
        setVisibility(!visibility)
      }}
      aria-label='grid toggle'
    >
      {visibility ? "Hide grid" : "Show grid"}
    </button>
  )
}

export default GridToggleIcon

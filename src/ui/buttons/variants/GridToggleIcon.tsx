/**
 * Welcome to @dnvt/grid-button!
 */

import React from "react"
import { useGridVisibility } from "../../../hooks/useGridVisibility"
import Icon from "../../../utils/icons/Icon"

type ToggleProps = { color?: string }

////////////////////////////////////////////////////////////////////////////////

const GridToggleIcon: React.FC<ToggleProps> = ({ color }) => {
  const [visibility, setVisibility] = useGridVisibility()

  return (
    <button
      type='button'
      onClick={() => { setVisibility(!visibility) }}
      aria-label='grid toggle'
    >
      <Icon color={color} name={visibility ? "grid" : "grid"} />
    </button>
  )
}

export default GridToggleIcon

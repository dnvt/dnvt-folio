/**
 * Welcome to @dnvt/grid-button!
 */

import React from "react"
import { useGridVisibility } from "../../../hooks/useGridVisibility"
import Icon from "../../../utils/icons/Icon"

////////////////////////////////////////////////////////////////////////////////

const GridToggleIcon: React.FC = () => {
  const [visibility, setVisibility] = useGridVisibility()

  return (
    <button
      type='button'
      onClick={() => { setVisibility(!visibility) }}
      aria-label='grid toggle'
    >
      <Icon name={visibility ? "grid" : "grid"} />
    </button>
  )
}

export default GridToggleIcon

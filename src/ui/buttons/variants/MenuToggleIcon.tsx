/**
 * Welcome to @dnvt/grid-button!
 */

import React, { useState } from "react"
import Icon from "../../../utils/icons/Icon"

type ToggleProps = { color?: string }

////////////////////////////////////////////////////////////////////////////////

const GridToggleIcon: React.FC<ToggleProps> = ({ color }) => {
  const [menu, setMenu] = useState<Boolean>(false)

  return (
    <button
      type='button'
      onClick={() => setMenu(menu => !menu)}
      aria-label='grid toggle'
    >
      <Icon color={color} name={menu ? "cross" : "menu"} />
    </button>
  )
}

export default GridToggleIcon

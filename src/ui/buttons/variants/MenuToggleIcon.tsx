
import React from "react"
import { useMenuVisibility } from "../../../hooks/useMenuVisibility"
import Icon from "../../../utils/icons/Icon"

type ToggleProps = { color?: string }

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/grid-button!
 */
const GridToggleIcon: React.FC<ToggleProps> = ({ color }) => {
  const [menu, setMenu] = useMenuVisibility()


  return (
    <button
      type='button'
      onClick={() => setMenu(!menu)}
      aria-label='grid toggle'
    >
      <Icon color={color} name={menu ? "cross" : "menu"} />
    </button>
  )
}

export default GridToggleIcon

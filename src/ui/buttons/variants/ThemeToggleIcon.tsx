/**
 * Welcome to @dnvt/theme-button!
 */

import React from "react"
import Icon from "../../../utils/icons/Icon"

type ToggleProps = { color?: string, animation?: {} }

////////////////////////////////////////////////////////////////////////////////

const ThemeToggleIcon: React.FC<ToggleProps> = ({ color }) => {
  const darkMode = false

  return (
    <button
      type='button'

      aria-label='theme color toggle'
    >
      <Icon color={color} name={darkMode ? "dark" : "light"} />
    </button>
  )
}

export default ThemeToggleIcon
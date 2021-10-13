/**
 * Welcome to @dnvt/theme-button!
 */

import React from "react"
import useDarkMode from "use-dark-mode"
import Icon from "../../../utils/icons/Icon"

type ToggleProps = { color?: string, animation?: {} }

////////////////////////////////////////////////////////////////////////////////

const ThemeToggleIcon: React.FC<ToggleProps> = ({ color }) => {
  const darkMode = useDarkMode()

  return (
    <button
      type='button'
      onClick={darkMode.toggle}
      aria-label='theme color toggle'
    >
      <Icon color={color} name={darkMode.value ? "dark" : "light"} />
    </button>
  )
}

export default ThemeToggleIcon
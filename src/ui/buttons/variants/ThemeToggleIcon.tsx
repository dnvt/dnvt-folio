/**
 * Welcome to @dnvt/theme-button!
 */

import React from "react"
import useDarkMode from "use-dark-mode"
import Icon from "../../../utils/icons/Icon"

////////////////////////////////////////////////////////////////////////////////

const ThemeToggleIcon: React.FC = () => {
  const darkMode = useDarkMode()

  return (
    <button
      type='button'
      onClick={darkMode.toggle}
      aria-label='theme color toggle'
    >
      <Icon name={darkMode.value ? "dark" : "light"} />
    </button>
  )
}

export default ThemeToggleIcon
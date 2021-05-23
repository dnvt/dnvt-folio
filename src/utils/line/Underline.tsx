/**
 * Welcome to @dnvt/underline!
 */

import React from "react"
import { useTheme } from "theming"
import { Theme } from "../theme/theme"
import UnderlineStyle from "./Underline-style"

export type UnderlineProps = {
  opacity?: number
  color?: string
  button?: boolean
  internal?: boolean
  external?: boolean
}

////////////////////////////////////////////////////////////////////////////////

const Underline: React.FC<UnderlineProps> = ({ internal, external, button, ...props }) => {
  const theme: Theme = useTheme()
  const classes = UnderlineStyle({ ...props, theme })

  let className = classes.Internal
  if (external) className = classes.External
  if (button) className = classes.Button

  return (
    <div
      className={className}
    />
  )
}

export default Underline

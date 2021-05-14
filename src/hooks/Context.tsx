import React from "react"
import { ColorTheme } from "./useTheme"

interface Props {
  children: JSX.Element
}

const Context = (props: Props) => {
  return <ColorTheme>{props.children}</ColorTheme>
}

export default Context

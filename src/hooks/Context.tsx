import React from "react"
import { DocumentSizeProvider } from "./useDimensionSize"
import { ColorTheme } from "./useTheme"
import { WindowSizeProvider } from "./useWindowSize"

const Context: React.FC = (props) => {
  return (
    <WindowSizeProvider>
      <DocumentSizeProvider>
        <ColorTheme>
          {props.children}
        </ColorTheme>
      </DocumentSizeProvider>
    </WindowSizeProvider>
  )
}

export default Context

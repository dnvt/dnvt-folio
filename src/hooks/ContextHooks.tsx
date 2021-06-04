import React from "react"
import { DocumentSizeProvider } from "./useDimensionSize"
import { GridVisibilityProvider } from "./useGridVisibility"
import { MenuVisibilityProvider } from "./useMenuVisibility"
import { ColorTheme } from "./useTheme"
import { WindowSizeProvider } from "./useWindowSize"

const ContextHooks: React.FC = (props) => {
  return (
    <WindowSizeProvider>
      <DocumentSizeProvider>
        <GridVisibilityProvider>
          <MenuVisibilityProvider>
            <ColorTheme>
              {props.children}
            </ColorTheme>
          </MenuVisibilityProvider>
        </GridVisibilityProvider>
      </DocumentSizeProvider>
    </WindowSizeProvider>
  )
}

export default ContextHooks

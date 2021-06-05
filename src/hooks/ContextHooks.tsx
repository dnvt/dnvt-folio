import React from "react"
import { GridVisibilityProvider } from "./useGridVisibility"
import { MenuVisibilityProvider } from "./useMenuVisibility"
import { MainColorProvider } from "./useSetMainColor"
import { ColorTheme } from "./useTheme"
import { WindowSizeProvider } from "./useWindowSize"

const ContextHooks: React.FC = (props) => {
  return (
    <WindowSizeProvider>
      <GridVisibilityProvider>
        <MenuVisibilityProvider>
          <ColorTheme>
            <MainColorProvider>
              {props.children}
            </MainColorProvider>
          </ColorTheme>
        </MenuVisibilityProvider>
      </GridVisibilityProvider>
    </WindowSizeProvider>
  )
}

export default ContextHooks

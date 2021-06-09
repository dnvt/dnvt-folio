import React from "react"
import { GridVisibilityProvider } from "./useGridVisibility"
import { IntroTranstionProvider } from "./useHeroTransition"
import { MenuVisibilityProvider } from "./useMenuVisibility"
import { MainColorProvider } from "./useSetMainColor"
import { ColorTheme } from "./useTheme"
import { WindowSizeProvider } from "./useWindowSize"

const ContextHooks: React.FC = (props) => {
  return (
    <WindowSizeProvider>
      <GridVisibilityProvider>
        <MenuVisibilityProvider>
          <IntroTranstionProvider>
            <ColorTheme>
              <MainColorProvider>
                {props.children}
              </MainColorProvider>
            </ColorTheme>
          </IntroTranstionProvider>
        </MenuVisibilityProvider>
      </GridVisibilityProvider>
    </WindowSizeProvider>
  )
}

export default ContextHooks

import { MotionConfig } from "framer-motion"
import React from "react"
import { DocumentSizeProvider } from "./useDimensionSize"
import { GridVisibilityProvider } from "./useGridVisibility"
import { ColorTheme } from "./useTheme"
import { WindowSizeProvider } from "./useWindowSize"

const ContextHooks: React.FC = (props) => {
  return (
    <WindowSizeProvider>
      <DocumentSizeProvider>
        <ColorTheme>
          <GridVisibilityProvider>
            <MotionConfig transition={{ duration: .012, type: "springs"  }}>
              {props.children}
            </MotionConfig>
          </GridVisibilityProvider>
        </ColorTheme>
      </DocumentSizeProvider>
    </WindowSizeProvider>
  )
}

export default ContextHooks

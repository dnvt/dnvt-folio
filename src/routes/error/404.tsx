import React from 'react'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import Fontimation from '../../utils/fonts/Fontimation'
import Grid from '../../utils/grids/Grid'

/**
 * Welcome to @dnvt/Error!
 */
const Error: React.FC = () => {
  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ width: "100%", maxHeight: "calc(100vh - 304px)" }}>
        <Fontimation>404</Fontimation>
      </div>
    </DocumentSizeProvider>
  )
}

export default Error

import React from 'react'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import Font from '../../utils/fonts/Font'
import Grid from '../../utils/grids/Grid'

/**
 * Welcome to @dnvt/Error!
 */
const Error: React.FC = () => {
  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ width: "100%", maxHeight: "calc(100vh - 304px)" }}>
        <Font type="h2">404</Font>
      </div>
    </DocumentSizeProvider>
  )
}

export default Error

import React from 'react'
import { DocumentSizeProvider } from '../../../hooks/useDimensionSize'
import Grid from '../../../utils/grids/Grid'
import Fontimation from '../../../utils/fonts/Fontimation'

////////////////////////////////////////////////////////////////////////////////



/**
 * Welcome to @dnvt/Guidelines!
 */
const HeroTest: React.FC = () => {


  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ zIndex: 1000, flex: 1, height: "calc(-1320px)" }}>
        <Fontimation>{"Animation test"}</Fontimation>
      </div>
    </DocumentSizeProvider>
  )
}

export default HeroTest

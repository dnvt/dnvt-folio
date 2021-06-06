import React, { useEffect } from 'react'
import Spacer from '../../utils/spacer/Spacer'
import Font from '../../utils/fonts/Font'
import Sidelines from '../../utils/sidelines/Sidelines'
import Grid from '../../utils/grids/Grid'
import { useTheme } from 'theming'
import { Theme } from '../../utils/theme/theme'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useMainColor } from '../../hooks/useSetMainColor'
import { DocumentSizeProvider } from '../../hooks/useDimensionSize'
import Introduction from './segments/Introduction'
import USMWork from './segments/USMWork'

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/Guidelines!
 * 
 * TODO:
 * Mount the page when all components exist
 * 
 */
const Homepage: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()
  const [, setColor] = useMainColor()
  // const animate = parse(location.search).fontAnimation

  let spacer = <Spacer contained height={window.width > 768 ? 184 : 40} />

  useEffect(() => {
    setColor(theme.text.hover)
  }, [setColor, theme.text.hover])

  return (
    <DocumentSizeProvider>
      <Grid />
      <Sidelines />
      <Spacer contained height={104} />
      {window.width > 767 && <Spacer contained height={184} />}
      <div style={{ position: "relative", height: 0 }}>
        <Font type="hero">François</Font>
      </div>
      <Introduction />
      {spacer}
      <USMWork />
      {/* 
      <Spacer contained height={104} />
      <PrivateWork />
      <Spacer contained height={104} />
      <SelectedWork />
      {spacer}
      <div style={{ position: "relative" }}>
        <FontHero animate={animate} value='Yeaaah!' />
      </div>
      <PlayGround />
      <div style={{ position: "relative" }}>
        <FontHero animate={animate} value='dnvt.me' />
      </div>
      {spacer}
      <About /> */}
    </DocumentSizeProvider>
  )
}

export default Homepage

import React from "react"
import { useTheme } from "react-jss"
import { DocumentSizeProvider } from "../../hooks/useDimensionSize"
import Button from "../../ui/buttons/Button"
import Font from "../../utils/fonts/Font"
import Grid from "../../utils/grids/Grid"
import Spacer from "../../utils/spacer/Spacer"
import { Theme } from "../../utils/theme/theme"
import Container from "../containers/Container"
import MenuStyle from "./Menu.style"

const Menu: React.FC = (props) => {
  const theme: Theme = useTheme()
  const classes = MenuStyle({ ...props, theme })

  return (
    <DocumentSizeProvider>
      <Grid />
      <div className={classes.Menu}>
        <Container>
          <nav className={classes.nav}>
            <Button menuToggle path="/work/usmobile/dashboard-pwa" icon={['mouse', "mouseHover"]} >Work</Button>
            <Spacer borderLess height='64px' width='100%' />
            <Button menuToggle path="/" icon={['cheese', "cheeseHover"]}>Playground</Button>
            <Spacer borderLess height='64px' width='100%' />
            <Button menuToggle path="/" icon={['smiley', "smileyHover"]} >About</Button>
            <Spacer borderLess height='64px' width='100%' />
            <Button menuToggle path='/guidelines' icon={['guidelines', "guidelinesHover"]}>Guidelines</Button>
            <Spacer borderLess height='64px' width='100%' />
          </nav>
          <div className={classes.hashContain}>
            <Font type='hero'>#</Font>
          </div>
        </Container>
        <Grid />
      </div>
    </DocumentSizeProvider>
  )
}

export default Menu

import React from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import Container from "../containers/Container"
import Button from "../../ui/buttons/Button"
import IconButton from "../../ui/buttons/IconButton"
import Spacer from "../../utils/spacer/Spacer"
import HeaderStyle from "./Header-style"
import { ShapesTypes } from "../../utils/icons/Icon"

type HeaderType = { positionNotfixed?: Boolean }
type ContentType = {
  iconWork?: [ShapesTypes, ShapesTypes]
  iconPlayground?: [ShapesTypes, ShapesTypes]
  iconAbout?: [ShapesTypes, ShapesTypes]
  iconGuidelines?: [ShapesTypes, ShapesTypes]
}

/**
 * Welcome to @dnvt/Header!
 */
const Header: React.FC<HeaderType> = ({ positionNotfixed }) => {
  const window = useWindowSize()
  const classes = HeaderStyle()

  const mobileSize = window.width < 767
  const mobileWidth = window.width < 575 ? "calc(100% - 32px)" : "calc(100% - 48px)"

  const spacer = <Spacer borderLess height='100%' width={window.width > 1359 ? 40 : 32} />
  const iconSpacer = <Spacer borderLess height='100%' width={window.width > 1359 ? 32 : 24} />

  const ICONS: ContentType = {
    iconWork: ["mouse", "mouseHover"],
    iconPlayground: ["cheese", "cheeseHover"],
    iconAbout: ["smiley", "smileyHover"],
    iconGuidelines: ["guidelines", "guidelinesHover"],
  }

  const mobileMenu = (<>
    <IconButton icon='menu' />
    {spacer}
    {spacer}
    <Button menuToggle path="/">François</Button>
    {spacer}
    <IconButton icon="light" />
    <IconButton icon="grid" />
  </>)

  const desktopMenu = (
    <>
      <Button path="/">François Denavaut</Button>
      {spacer}
      <Button icon={ICONS.iconWork} path="/work/usmobile/dashboard-pwa">Work</Button>{spacer}
      <Button icon={ICONS.iconPlayground} tooltip="Under construction">Playground</Button>{spacer}
      <Button icon={ICONS.iconAbout} path="/about">About</Button>{spacer}
      <Button icon={ICONS.iconGuidelines} path="/guidelines">Guidelines</Button>{iconSpacer}
      <IconButton tooltip="Switch to Dark Theme" icon="light" />{iconSpacer}
      <IconButton tooltip="Show the Grid" icon="grid" />
    </>
  )

  return (
    <Container>
      <header
        className={classes.menu}
        style={{
          position: positionNotfixed ? "relative" : "fixed",
          width: mobileSize ? mobileWidth : "100%"
        }}>
        <nav className={classes.nav}>
          {mobileSize ? mobileMenu : desktopMenu}
        </nav>
      </header>
    </Container>
  )
}

export default Header
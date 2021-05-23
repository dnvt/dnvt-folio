/**
 * Welcome to @dnvt/header!
 */

import React from "react"
import Container from "../../containers/Container"
import { useWindowSize } from "../../hooks/useWindowSize"
import Button from "../../ui/buttons/Button"
import IconButton from "../../ui/buttons/IconButton"
import Spacer from "../../utils/spacer/Spacer"
import HeaderStyle from "./Header-style"

type HeaderType = { positionNotfixed?: Boolean }

const Header: React.FC<HeaderType> = () => {
  const window = useWindowSize()
  const classes = HeaderStyle()

  const mobileSize = window.width! < 767
  const mobileWidth = window.width! < 575 ? "calc(100% - 32px)" : "calc(100% - 48px)"

  const spacer = (
    <Spacer borderLess height='100%' width={window.width! > 1360 ? 40 : 32} />
  )
  const iconSpacer = (
    <Spacer borderLess height='100%' width={window.width! > 1360 ? 32 : 24} />
  )

  const desktopMenu = (
    <>
      <Button icon="mouse" hover="mouseHover">Work</Button>{spacer}
      <Button icon="cheese" hover="cheeseHover">Playground</Button>{spacer}
      <Button icon="smiley" hover="smileyHover">About</Button>{spacer}
      <Button icon="guidelines" hover="guidelinesHover">Guidelines</Button>{iconSpacer}
      <IconButton icon="light" />{iconSpacer}
      <IconButton icon="grid" />
    </>
  )

  return (
    <Container>
      <header
        className={classes.menu}
        style={{ position: "fixed", width: mobileSize ? mobileWidth : "100%" }}>
        <nav className={classes.nav}>
          <Button>François Denavaut</Button>
          {spacer}
          {mobileSize ? <IconButton icon='menu' /> : desktopMenu}
        </nav>
      </header>
    </Container>
  )
}

export default Header
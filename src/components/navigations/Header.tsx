/**
 * Welcome to @dnvt/Header!
 */

import React, { useMemo } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import Container from "../containers/Container"
import Button from "../../ui/buttons/Button"
import IconButton, { IconButtonType } from "../../ui/buttons/IconButton"
import Spacer from "../../utils/spacer/Spacer"
import HeaderStyle from "./Header-style"
import { ShapesTypes } from "../../utils/icons/Icon"

type HeaderType = { positionNotfixed?: Boolean }
type ContentType = {
  value?: string
  icon?: ShapesTypes
  iconButton?: IconButtonType
  hover?: ShapesTypes
}

////////////////////////////////////////////////////////////////////////////////

const Header: React.FC<HeaderType> = () => {
  const window = useWindowSize()
  const classes = HeaderStyle()

  const mobileSize = window.width! < 767
  const mobileWidth = window.width! < 575 ? "calc(100% - 32px)" : "calc(100% - 48px)"

  const spacer = <Spacer borderLess height='100%' width={window.width! > 1360 ? 40 : 32} />
  const iconSpacer = <Spacer borderLess height='100%' width={window.width! > 1360 ? 32 : 24} />

  const mobileMenu = <IconButton icon='menu' />
  const HEADER_CONTENT = useMemo<ContentType[]>(() => [
    { value: "François Denavaut" },
    { icon: "mouse", hover: "mouseHover", value: "Work" },
    { icon: "cheese", hover: "cheeseHover", value: "Playground" },
    { icon: "smiley", hover: "smileyHover", value: "About" },
    { icon: "guidelines", hover: "guidelinesHover", value: "Guidelines" },
  ], [])

  const desktopMenu = (
    <>
      <Button icon={HEADER_CONTENT[1].icon} hover="mouseHover">{HEADER_CONTENT[1].value}</Button>{spacer}
      <Button icon={HEADER_CONTENT[2].icon} hover="cheeseHover">{HEADER_CONTENT[2].value}</Button>{spacer}
      <Button icon={HEADER_CONTENT[3].icon} hover="smileyHover">{HEADER_CONTENT[3].value}</Button>{spacer}
      <Button icon={HEADER_CONTENT[4].icon} hover="guidelinesHover">{HEADER_CONTENT[4].value}</Button>{iconSpacer}
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
          <Button>{HEADER_CONTENT[0].value}</Button>
          {spacer}
          {mobileSize ? mobileMenu : desktopMenu}
        </nav>
      </header>
    </Container>
  )
}

export default Header
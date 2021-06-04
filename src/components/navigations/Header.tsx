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
  icon?: ShapesTypes | [ShapesTypes, ShapesTypes]
  iconButton?: IconButtonType
  hover?: ShapesTypes
}

////////////////////////////////////////////////////////////////////////////////

const Header: React.FC<HeaderType> = ({ positionNotfixed }) => {
  const window = useWindowSize()
  const classes = HeaderStyle()

  const mobileSize = window.width! < 767
  const mobileWidth = window.width! < 575 ? "calc(100% - 32px)" : "calc(100% - 48px)"

  const spacer = <Spacer borderLess height='100%' width={window.width > 1360 ? 40 : 32} />
  const iconSpacer = <Spacer borderLess height='100%' width={window.width > 1360 ? 32 : 24} />

  const CONTENT = useMemo<ContentType[]>(() => [
    { value: "François Denavaut" },
    { icon: ["mouse", "mouseHover"], value: "Work" },
    { icon: ["cheese", "cheeseHover"], value: "Playground" },
    { icon: ["smiley", "smileyHover"], value: "About" },
    { icon: ["guidelines", "guidelinesHover"], value: "Guidelines" },
  ], [])

  const mobileMenu = (<>
    <Button menuToggle path="/">{CONTENT[0].value}</Button>
    {spacer}
    <IconButton icon="grid" />
    <IconButton icon="light" />
    <IconButton icon='menu' />
  </>)

  const desktopMenu = (
    <>
      <Button path="/">{CONTENT[0].value}</Button>
      {spacer}
      <Button icon={CONTENT[1].icon} path="/">{CONTENT[1].value}</Button>{spacer}
      <Button icon={CONTENT[2].icon} path="/">{CONTENT[2].value}</Button>{spacer}
      <Button icon={CONTENT[3].icon} path="/">{CONTENT[3].value}</Button>{spacer}
      <Button icon={CONTENT[4].icon} path="/guidelines">{CONTENT[4].value}</Button>{iconSpacer}
      <IconButton icon="light" />{iconSpacer}
      <IconButton icon="grid" />
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
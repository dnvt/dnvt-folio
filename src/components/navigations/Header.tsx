import React, { useMemo } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import Container from "../containers/Container"
import Button from "../../ui/buttons/Button"
import IconButton from "../../ui/buttons/IconButton"
import Spacer from "../../utils/spacer/Spacer"
import HeaderStyle from "./Header-style"
import { ShapesTypes } from "../../utils/icons/Icon"

type HeaderType = { positionNotfixed?: Boolean }
type IconProps = { icon?: [ShapesTypes, ShapesTypes], text: string | string[] }
type ContentType = {
  home: IconProps
  work: IconProps
  playground: IconProps
  about: IconProps
  guidelines: IconProps
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

  const HEADER_CONTENT = getHeaderContent()
  const CONTENT = useMemo(() => HEADER_CONTENT, [HEADER_CONTENT])




  const mobileMenu = (<>
    <IconButton icon='menu' />
    {spacer}
    <Button menuToggle path="/">{CONTENT.home.text[1]}</Button>
    {spacer}
    {/* <IconButton icon="light" /> */}
    <IconButton icon="grid" />
  </>)

  const desktopMenu = (
    <>
      <Button path="/">{CONTENT.home.text[0]}</Button>
      {spacer}
      <Button icon={CONTENT.work.icon} path="/work/usmobile/dashboard-pwa">{CONTENT.work.text}</Button>{spacer}
      <Button icon={CONTENT.playground.icon} tooltip="Under construction">{CONTENT.playground.text}</Button>{spacer}
      <Button icon={CONTENT.about.icon} path="/about">{CONTENT.about.text}</Button>{spacer}
      <Button icon={CONTENT.guidelines.icon} path="/guidelines">{CONTENT.guidelines.text}</Button>{iconSpacer}
      {/* <IconButton tooltip="Switch to Dark Theme" icon="light" />{iconSpacer} */}
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

/////////////////////////////////////////////////////////////////

function getHeaderContent(): ContentType {
  return {
    home: { text: ["François Denavaut", "François"] },
    work: { icon: ["mouse", "mouseHover"], text: "Work" },
    playground: { icon: ["cheese", "cheeseHover"], text: "Playground" },
    about: { icon: ["smiley", "smileyHover"], text: "About" },
    guidelines: { icon: ["guidelines", "guidelinesHover"], text: "Guidelines" },
  }
}
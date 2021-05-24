/**
 * Welcome to @dnvt/Footer!
 */

import React, { useMemo } from "react"
import { useTheme } from "react-jss"
import Container from "../containers/Container"
import { useWindowSize } from "../../hooks/useWindowSize"
import ExternalLink from "../../ui/links/external-link/ExternalLink"
import Font from "../../utils/fonts/Font"
import Spacer from "../../utils/spacer/Spacer"
import { Theme } from "../../utils/theme/theme"

type ContentType = {
  value: string
}

////////////////////////////////////////////////////////////////////////////////

const Footer: React.FC = () => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const currentYear = new Date().getFullYear()

  const FOOTER_CONTENT = useMemo<ContentType[]>(() => [
    { value: "Dribbble" },
    { value: "Github" },
    { value: "Twitter" },
    { value: "LinkedIn" },
    { value: "Email" },
    { value: "More of me at" }
  ], [])

  const menuList = (
    <div
      style={
        window.width! > 768
          ? { display: "flex" }
          : { display: "block", padding: "8px 0" }
      }
    >
      <ExternalLink path='/' >{FOOTER_CONTENT[0].value}</ExternalLink>
      <ExternalLink path='/' >{FOOTER_CONTENT[1].value}</ExternalLink>
      <ExternalLink path='/' >{FOOTER_CONTENT[2].value}</ExternalLink>
      <ExternalLink path='/' >{FOOTER_CONTENT[3].value}</ExternalLink>
      <ExternalLink path='/' >{FOOTER_CONTENT[4].value}</ExternalLink>
    </div>
  )

  return (
    <>
      <footer style={{ height: "auto" }}>
        <Container>
          <Spacer height={window.width! > 767 ? 80 : 64} />
          <Font
            type='legend'
            style={{ color: theme.text.hover }}>
            {FOOTER_CONTENT[5].value}
          </Font>
          {menuList}
          <Spacer height={16} />
          <Font
            type='legend'
            style={{ color: theme.text.secondary }}>
            {`© ${ currentYear }. Made with Figma and React`}
          </Font>
          <Spacer height={40} />
        </Container>
      </footer>
    </>
  )
}

export default Footer
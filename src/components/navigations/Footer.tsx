/**
 * Welcome to @dnvt/Footer!
 */

import React, { useMemo } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import { useWindowSize } from "../../hooks/useWindowSize"
import Container from "../containers/Container"
import ExternalLink from "../../ui/links/external-link/ExternalLink"
import Font from "../../utils/fonts/Font"
import Spacer from "../../utils/spacer/Spacer"
import { useMainColor } from "../../hooks/useSetMainColor"

type ContentType = {
  value: string
}

////////////////////////////////////////////////////////////////////////////////

const Footer: React.FC = () => {
  const window = useWindowSize()
  const theme: Theme = useTheme()
  const [color] = useMainColor()
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
      <ExternalLink path='https://dribbble.com/Franzwa' >{FOOTER_CONTENT[0].value}</ExternalLink>
      <ExternalLink path='https://github.com/dnvt' >{FOOTER_CONTENT[1].value}</ExternalLink>
      <ExternalLink path='https://dribbble.com/Franzwa' >{FOOTER_CONTENT[2].value}</ExternalLink>
      <ExternalLink path='https://www.linkedin.com/in/françois-denavaut-a75307153/' >{FOOTER_CONTENT[3].value}</ExternalLink>
      <ExternalLink path='mailto:francois@dnvt.me' >{FOOTER_CONTENT[4].value}</ExternalLink>
    </div>
  )

  return (
    <>
      <footer style={{ height: "auto", transform: "translateY(0)", zIndex: 10 }}>
        <Container>
          <Spacer height={window.width! > 767 ? 80 : 64} />
          <Font
            type='legend'
            style={{ color: color }}>
            {FOOTER_CONTENT[5].value}
          </Font>
          {menuList}
          <Spacer height={16} />
          <Font
            type='legend'
            style={{ color: theme.text.secondary }}>
            {`© ${ currentYear }. Made with Figma and React`}
          </Font>
          <Spacer height={64} />
        </Container>
      </footer>
    </>
  )
}

export default Footer

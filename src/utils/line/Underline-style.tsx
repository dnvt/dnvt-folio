import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"

type Props = { color?: string, opacity?: number }

const UnderlineStyle = createUseStyles(theme => ({
  Internal: {
    width: "100%",
    height: "1px",
    marginTop: "-10px",
    marginBottom: "1px",
    background: props => (props as unknown as Props).color ?? (theme as Theme).text.primary,
    opacity: props => (props as unknown as Props).opacity ?? 1,
    transition: "background .12s ease, opacity .12s ease"
  },
  Button: {
    width: "100%",
    height: "1px",
    marginTop: "-9px",
    background: props => (props as unknown as Props).color ?? (theme as Theme).text.primary,
    opacity: props => (props as unknown as Props).opacity ?? 1,
    transition: "background .12s ease, opacity .12s ease"
  },
  External: {
    width: "100%",
    height: "1px",
    marginTop: "-10px",
    background: props => (props as unknown as Props).color ?? (theme as Theme).text.primary,
    opacity: props => (props as unknown as Props).opacity ?? 1,
    transition: "background .12s ease, opacity .12s ease"
  }
}))

export default UnderlineStyle


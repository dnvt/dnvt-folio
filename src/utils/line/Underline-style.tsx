import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"

const UnderlineStyle = createUseStyles({
  Internal: {
    width: "100%",
    height: "1px",
    marginTop: "-10px",
    marginBottom: "1px",
    background: ({ theme }) => (theme as Theme).text.primary,
    transition: "background .12s ease"
  },
  Button: {
    width: "100%",
    height: "1px",
    marginTop: "-9px",
    background: ({ theme }) => (theme as Theme).text.primary,
    transition: "background .12s ease"
  },
  External: {
    width: "100%",
    height: "1px",
    marginTop: "-10px",
    background: ({ theme }) => (theme as Theme).text.primary,
    transition: "background .12s ease"
  }
})

export default UnderlineStyle

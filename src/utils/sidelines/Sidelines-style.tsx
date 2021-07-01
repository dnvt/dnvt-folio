import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"

const SidelinesStyle = createUseStyles({
  sidelines: {
    display: "none",
    position: "fixed",
    maxWidth: "100%",
    height: "100%",
    zIndex: "-1",
    top: "0",
    borderLeft: ({ theme }) => `1px solid ${ (theme as Theme).border.outline }`,
    borderRight: ({ theme }) => `1px solid ${ (theme as Theme).border.outline }`,
    transition: "all 0.12s ease",

    "@media (min-width: 1080px)": {
      display: "block",
      width: "1024px",
      padding: "0",
      left: "50%",
      marginLeft: "-512px",
    },
    "@media (min-width: 1280px)": {
      display: "block",
      width: "1088px",
      padding: "0",
      left: "50%",
      marginLeft: "-544px",
    },
    "@media (min-width: 1360px)": {
      display: "block",
      width: "1280px",
      padding: "0",
      left: "50%",
      marginLeft: "-640px",
    },

    "@media (min-width: 1480px)": {
      display: "block",
      width: "1480px",
      padding: "0",
      left: "50%",
      marginLeft: "-740px",
    },
  },
})

export default SidelinesStyle
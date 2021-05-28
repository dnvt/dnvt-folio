import { createUseStyles } from "react-jss"
import { Theme } from "../../utils/theme/theme"

const VignetteStyle = createUseStyles(theme => ({
  Vignette: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: "256px",
    background: (theme as Theme).background.empty,

    "@media (min-width: 768px)": {
      height: "576px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
  VignetteWidth: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: "336px",
    background: (theme as Theme).background.empty,

    "@media (min-width: 768px)": {
      height: "296px",
    },
    "@media (min-width: 1360px)": {
      height: "464px",
    },
  },

  heroVignette: {
    display: "flex",
    justifyContent: "center",
    transition: "height .6s ease",
    width: "auto",
    position: "relative",
    objectFit: "cover",
    overflow: "hidden",
    padding: "24px 0",
    height: "664px",

    "@media (min-width: 768px)": {
      height: "960px",
      // Final values in the Component
    },
    "@media (min-width: 1360px)": {
      height: "1200px",
      // Final values in the Component
    },
  },

  Image: {

    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "auto",
    background: (theme as Theme).background.empty,
    height: "256px",

    objectFit: "cover",
    transition: "transform .15s ease",

    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
    "@media (min-width: 768px)": {
      height: "576px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
}))

export default VignetteStyle

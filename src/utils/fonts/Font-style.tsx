import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"

type Props = { color: string }

const FontStyle = createUseStyles(theme => ({
  Fontimation: {
    zIndex: -1,
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    overflowX: "hidden",
  },

  hero: {
    // Test
    position: "absolute",
    zIndex: "-1",
    fontFamily: "Inter",
    fontWeight: "800",
    textAlign: "center",
    fontSize: "242px",
    lineHeight: "360px",
    letterSpacing: "-.023em",
    userSelect: "none",
    padding: "0 60px",
    background: (theme as Theme).text.hero,
    WebkitBackgroundClip: "text !important",
    backgroundClip: "text !important",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",

    "@media (min-width: 768px)": {
      fontSize: "640px",
      lineHeight: "1160px",
    },
    "@media (min-width: 1360px)": {
      fontSize: "1000px",
      lineHeight: "1320px",
      letterSpacing: "-.024em",
      margin: " -160px 0 160px"
    },
  },

  span: {
    borderBottom: "1px solid",
    transition: "borderBottom .12s ease",
  },

  link: {
    transition: "color .15s ease",
    fontFamily: "GT Sectra",
    fontWeight: "normal",
    fontSize: "19px",
    lineHeight: "24px",
    letterSpacing: "0em",
    margin: "0",
    transform: "translateY(0)", zIndex: 10,

    color: props => (props as unknown as Props).color ?? (theme as Theme).text.primary,

    "@media (min-width: 768px)": {
      fontSize: "21px",
      lineHeight: "32px",
    },
    "@media (min-width: 1360px)": {
      fontSize: "23px",
      lineHeight: "32px",
    },
  },

  legend: {
    transition: "color .15s ease",
    fontFamily: "iA Writer",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "-.007em",
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    color: (theme as Theme).text.secondary,
    margin: "0",
    transform: "translateY(0)", zIndex: 10,
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "32px",
      letterSpacing: "-.009em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "-.011em",
    },
  },

  tooltip: {
    transition: "color .15s ease",
    fontFamily: "iA Writer",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "-.009em",
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    whiteSpace: "nowrap",
    color: (theme as Theme).text.tooltip,
    margin: "0",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "32px",
      letterSpacing: "-.011em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "-.014em",
    },
  },

  menu: {
    transition: "color .15s ease",
    fontFamily: "iA Writer",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "-.009em",
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    margin: "0",
    whiteSpace: "nowrap",
    color: (theme as Theme).text.primary,

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-.011em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "-.014em",
    },
  },

  listNumber: {
    position: "relative",
    "@media (min-width: 992px)": {
      position: "absolute",
      width: "24px",
      left: "-38px",
    },
  },
}))

export default FontStyle

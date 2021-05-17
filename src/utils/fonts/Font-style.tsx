import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"


const FontStyle = createUseStyles({
  hero: {
    // Test
    position: "absolute",

    fontFamily: "Inter",
    fontWeight: "800",
    textAlign: "center",
    fontSize: "242px",
    lineHeight: "360px",
    letterSpacing: "-.023em",
    userSelect: "none",
    padding: "0 60px",

    background: ({ theme }) => (theme as Theme).text.hero,
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
    },
  },
  h1: {
    transition: "color .15s ease",
    fontFamily: "Inter",
    fontWeight: "800",
    fontSize: "46px",
    lineHeight: "56px",
    letterSpacing: "-.019em",
    color: ({ theme }) => (theme as Theme).text.primary,
    margin: "0",
    overflowWrap: "break-word",

    "@media (min-width: 768px)": {
      fontSize: "66px",
      lineHeight: "80px",
    },
    "@media (min-width: 1360px)": {
      fontSize: "84px",
      lineHeight: "96px",
    },
  },
  h2: {
    transition: "color .15s ease",
    fontFamily: "Inter",
    fontWeight: "200",
    fontSize: "84px",
    lineHeight: "88px",
    letterSpacing: "-.022em",
    color: ({ theme }) => (theme as Theme).text.primary,
    margin: "0",
    marginLeft: "-.9%",
    marginRight: "-.9%",
    zIndex: -1,
    userSelect: "none",

    "@media (min-width: 768px)": {
      fontSize: "180px",
      lineHeight: "184px",
      marginLeft: "-1.2%",
      marginRight: "-1.2%",
      letterSpacing: "-.023em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "242px",
      lineHeight: "232px",
      marginLeft: "-1.2%",
      marginRight: "-1.2%",
    },
  },
  h3: {
    transition: "color .15s ease",
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "36px",
    lineHeight: "48px",
    letterSpacing: "-.016em",
    color: ({ theme }) => (theme as Theme).text.primary,
    margin: "0",

    "@media (min-width: 768px)": {
      fontSize: "42px",
      lineHeight: "56px",
      letterSpacing: "-.016em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "46px",
      lineHeight: "56px",
    },
  },
  span: {
    borderBottom: "1px solid",
    transition: "borderBottom .15s ease",
  },
  h4: {
    transition: "color .15s ease",
    fontFamily: "Inter",
    fontWeight: "medium",
    fontSize: "21px",
    lineHeight: "32px",
    letterSpacing: "-.015em",
    color: ({ theme }) => (theme as Theme).text.primary,
    margin: "0",

    "@media (min-width: 768px)": {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-.018em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "26px",
      lineHeight: "32px",
      letterSpacing: "-.018em",
    },
  },
  h5: {
    transition: "color .15s ease",
    fontFamily: "iA Writer",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-.011em",
    color: ({ theme }) => (theme as Theme).text.primary,
    margin: "0",

    "@media (min-width: 768px)": {
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "-.014em",
    },
    "@media (min-width: 1360px)": {
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "-.017em",
    },
  },
  text: {
    transition: "color .15s ease",
    fontFamily: "GT Sectra",
    fontWeight: "normal",
    fontSize: "19px",
    lineHeight: "24px",
    letterSpacing: "0em",
    margin: "0",
    color: ({ theme }) => (theme as Theme).text.primary,

    "@media (min-width: 768px)": {
      fontSize: "21px",
      lineHeight: "32px",
    },
    "@media (min-width: 1360px)": {
      fontSize: "23px",
      lineHeight: "32px",
    },
    "& span": {
      transition: "color .15s ease",
      fontFamily: "iA Writer",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "24px",
      letterSpacing: "-.009em",
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      color: ({ theme }) => (theme as Theme).text.secondary,
      margin: "2px 0 -2px",

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
  },
  link: {
    transition: "color .15s ease",
    fontFamily: "GT Sectra",
    fontWeight: "normal",
    fontSize: "19px",
    lineHeight: "24px",
    letterSpacing: "0em",
    margin: "0",
    color: ({ theme }) => (theme as Theme).text.primary,

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
    letterSpacing: "-.009em",
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    color: ({ theme }) => (theme as Theme).text.secondary,
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
    color: ({ theme }) => (theme as Theme).background.tooltip,
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
    color: ({ theme }) => (theme as Theme).text.primary,

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
})

export default FontStyle

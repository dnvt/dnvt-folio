import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"

const VerticalStyle = createUseStyles({
  Vertical: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    WebkitUserSelect: "none",  /* Chrome all / Safari all */
    MozUserSelect: "none",     /* Firefox all */
    MsUserSelect: "none",      /* IE 10+ */
    userSelect: "none",
  },

  Column: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "1fr",
    columnGap: "16px",
    transition: "column-gap .15s ease, grid-template-columns .15s ease",

    "& div": {
      height: "100%",
      background: ({ theme }) => (theme as Theme).border.verticalGrid,
    },

    "@media (min-width: 576px)": {
      gridTemplateColumns: "1fr",
    },

    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      columnGap: "24px"
    },

    "@media (min-width: 992px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
      columnGap: "32px"
    },

    "@media (min-width: 1360px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      columnGap: "32px"
    },
  },
})

export default VerticalStyle

import { createUseStyles } from "react-jss"
import { Theme } from "../theme/theme"

const HorizontalStyle = createUseStyles({
  Horizontal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: "-1",
    WebkitUserSelect: "none",  /* Chrome all / Safari all */
    MozUserSelect: "none",     /* Firefox all */
    MsUserSelect: "none",      /* IE 10+ */
    userSelect: "none",
  },

  Row: {
    position: "relative",
    top: 0,
    width: "100%",
    height: 8,

    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 1,
      background: ({ theme }) => (theme as Theme).grid.horizontalGrid,
    },
  },
})

export default HorizontalStyle

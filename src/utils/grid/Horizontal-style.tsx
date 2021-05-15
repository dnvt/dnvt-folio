import { createUseStyles } from "react-jss";
import { Theme } from "../theme/theme";

const HorizontalStyle = createUseStyles({
  Horizontal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: "-1",
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
      background: ({ theme }) => (theme as Theme).border.horizontalGrid,
    },
  },
});

export default HorizontalStyle;

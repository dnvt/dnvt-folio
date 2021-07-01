import { createUseStyles } from "react-jss"

const FontimationStyle = createUseStyles({
  fontimation: {
    zIndex: -1,
    overflow: "hidden",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    width: "100%",
    userSelect: "none",
    height: "240px",

    "@media (min-width: 768px)": {
      height: "960px",
    },
    "@media (min-width: 1360px)": {
      height: "1320px",
    },
  },
  hideDiv: {
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
    textAlign: "center",
    justifyContent: "center",
    userSelect: "none",
  },
})

export default FontimationStyle
import { createUseStyles } from "react-jss"

const HeroStyle = createUseStyles({
  Hero: {
    display: "grid",
    gridTemplateColumns:
      "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    width: "100%",
    overflow: "hidden",
    zIndex: "-1",
    "@media (min-width: 768px)": {
      height: "800px",
    },
    "@media (min-width: 1360px)": {
      height: "1240px",
    },
  },

  Fontimation: {
    zIndex: -1,
    position: "absolute",
    top: "-320px",
    height: "1480px",
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    overflowX: "hidden",
  },

  heroAnimated: {
    position: "relative",
    overflowX: "hidden",
    display: "flex",
    alignItems: "flex-start",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    // zIndex: -1,
  }
})

export default HeroStyle
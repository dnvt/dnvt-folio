import { createUseStyles } from "react-jss"

const ButtonStyle = createUseStyles({
  MenuButton: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginBottom: "6px"
  },
  // WIPLink: {
  //   position: "relative",
  //   cursor: "not-allowed",
  //   display: "flex",
  //   flexDirection: "row",
  // },
  icon: {
    height: "100%",
    padding: "5px 0",
    display: "flex",
    alignItems: "center",
  },
  tooltip: {
    display: "none",
    top: "28px",
    position: "absolute",
    opacity: "0",
  },
  tooltipHovered: {
    display: "block",
    top: "32px",
    position: "absolute",
    opacity: "1",
    transition: "all .12s ease",
  },
})

export default ButtonStyle

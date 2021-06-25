import { createUseStyles } from "react-jss"

const InternalLinkStyle = createUseStyles({
  inside: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 768px)": { paddingBottom: "8px" },
  },

  internal: {
    margin: "0",
    paddingBottom: "7px",
    width: "max-content",
    marginRight: "24px",
    color: "",
    transform: "translate(0px)",
    zIndex: 10,

    "@media (min-width: 768px)": { marginRight: "32px" },
    "@media (min-width: 1360px)": { marginRight: "40px" },
    "&:last-of-type": {
      marginRight: "0px",
    },
    "& :hover": {
      cursor: "pointer",
    },
  },
})

export default InternalLinkStyle

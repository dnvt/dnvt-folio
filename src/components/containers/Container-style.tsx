import { createUseStyles } from "react-jss"

const ContainerStyle = createUseStyles({
  Container: {
    width: "100%",
    maxWidth: "928px",
    height: "auto",
    padding: "0 16px",
    margin: "0 auto",
    zIndex: "5",
    transition: "width .15s ease, padding .15s ease",

    "@media (min-width: 576px)": {
      padding: "0 23px",
    },

    "@media (min-width: 768px)": {
      padding: "0 32px",
    },

    "@media (min-width: 992px)": {
      width: "928px",
      padding: "0",
    },

    "@media (min-width: 1360px)": {
      width: "1120px",
      padding: "0",
    },
  },

  BigContainer: {
    overflow: "visible",
    maxWidth: "100%",
    padding: "0 16px",
    margin: "0 auto",
    zIndex: "1",

    "@media (min-width: 576px)": {
      padding: "0 24px",
    },

    "@media (min-width: 768px)": {
      padding: "0 32px",
    },

    "@media (min-width: 992px)": {
      width: "1148px",
      padding: "0",
    },

    "@media (min-width: 1360px)": {
      width: "1344px",
      padding: "0",
    },
  },

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flexAround: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
})

export default ContainerStyle
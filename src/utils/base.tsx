interface Base {
  slate: Slate
  main: Main
  secondary: Secondary
  red: Red
  yellow: Yellow
  green: Green
  opacity: Opacity
}

// BASE constant colors
export const LIGHT: Base = {
  slate: {
    S99: "#000000",
    S95: "#191919",
    S90: "#24292E",
    S70: "#757A82",
    S30: "#E7E7E7",
    S20: "#F3F3F3",
    S10: "#F4F6F9",
    S00: "#FFFFFF"
  },
  main: {
    M99: "#00BAFF",
    M40: "rgba(0,186,255,.4)"
  },
  secondary: {
    S99: "#6A78FF",
    S40: "rgba(106,120,255,.4)",
    gradient: "linear-gradient(180deg, rgba(106, 120, 255, 0.1) -30%, rgba(0, 185, 255, 0.1) 130%)"
  },
  red: {
    R99: "#FC605C",
    R40: "rgba(252,96,92,.4)"
  },
  yellow: {
    Y99: "#FDBC40",
    Y40: "rgba(253,188,64,.4)"
  },
  green: {
    G99: "#34C749",
    G40: "rgba(52,199,73,.4)"
  },
  opacity: {
    O10: "rgba(25,25,25,.1",
    O00: "rgba(0,0,0,0)",
    transparent: "rgba(255,255,255,0)"
  }
}

// TODO Dark colors
export const DARK: Base = {
  slate: {
    S99: "#000000",
    S95: "#191919",
    S90: "#24292E",
    S70: "#757A82",
    S30: "#E7E7E7",
    S20: "#F3F3F3",
    S10: "#F4F6F9",
    S00: "#FFFFFF"
  },
  main: {
    M99: "#00BAFF",
    M40: "rgba(0,186,255,.4)"
  },
  secondary: {
    S99: "#6A78FF",
    S40: "rgba(106,120,255,.4)",
    gradient: "linear-gradient(180deg, rgba(106, 120, 255, 0.1) -30%, rgba(0, 185, 255, 0.1) 130%)"
  },
  red: {
    R99: "#FC605C",
    R40: "rgba(252,96,92,.4)"
  },
  yellow: {
    Y99: "#FDBC40",
    Y40: "rgba(253,188,64,.4)"
  },
  green: {
    G99: "#34C749",
    G40: "rgba(52,199,73,.4)"
  },
  opacity: {
    O10: "rgba(25,25,25,.1",
    O00: "rgba(0,0,0,0)",
    transparent: "rgba(255,255,255,0)"
  }
}


// Object types
type Slate = {
  S99: string
  S95: string
  S90: string
  S70: string
  S30: string
  S20: string
  S10: string
  S00: string
}

type Main = {
  M99: string
  M40: string
}

type Secondary = {
  S99: string
  S40: string
  gradient: string
}

type Red = {
  R99: string
  R40: string
}

type Yellow = {
  Y99: string
  Y40: string
}

type Green = {
  G99: string
  G40: string
}

type Opacity = {
  O10: string
  O00: string
  transparent: string
}


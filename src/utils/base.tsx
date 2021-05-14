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
    S100: "#000000",
    S090: "#191919",
    S070: "#24292E",
    S060: "#757A82",
    S040: "#E7E7E7",
    S020: "#F3F3F3",
    S010: "#F4F6F9",
    S000: "#FFFFFF"
  },
  main: {
    M100: "#00BAFF",
    M040: "rgba(0,186,255,.4)"
  },
  secondary: {
    S100: "#6A78FF",
    S040: "rgba(106,120,255,.4)",
    gradient: "linear-gradient(180deg, rgba(106, 120, 255, 0.1) -30%, rgba(0, 185, 255, 0.1) 130%)"
  },
  red: {
    R100: "#FC605C",
    R040: "rgba(252,96,92,.4)"
  },
  yellow: {
    Y100: "#FDBC40",
    Y040: "rgba(253,188,64,.4)"
  },
  green: {
    G100: "#34C749",
    G040: "rgba(52,199,73,.4)"
  },
  opacity: {
    O010: "rgba(25,25,25,.1",
    O000: "rgba(0,0,0,0)",
    transparent: "rgba(255,255,255,0)"
  }
}

// TODO Dark colors
export const DARK: Base = {
  slate: {
    S100: "#FFFFFF",
    S090: "#E9E9E9",
    S070: "#878892",
    S060: "#2C292E",
    S040: "#282828",
    S020: "#1C1C1C",
    S010: "#0E1012",
    S000: "#000000"
  },
  main: {
    M100: "#6946BA",
    M040: "rgba(105,70,186,.4)"
  },
  secondary: {
    S100: "#500BF1",
    S040: "rgba(80,11,241,.4)",
    gradient: "linear-gradient(180deg, rgba(80, 11, 241, 0.25) -29.19%, rgba(105, 70, 186, 0.25) 127.14%);"
  },
  red: {
    R100: "#FC605C",
    R040: "rgba(252,96,92,.4)"
  },
  yellow: {
    Y100: "#FDBC40",
    Y040: "rgba(253,188,64,.4)"
  },
  green: {
    G100: "#34C749",
    G040: "rgba(52,199,73,.4)"
  },
  opacity: {
    O010: "rgba(225,225,225,.1",
    O000: "rgba(255,255,255,0)",
    transparent: "rgba(0,0,0,0)"
  }
}


// Object types
type Slate = {
  S100: string
  S090: string
  S070: string
  S060: string
  S040: string
  S020: string
  S010: string
  S000: string
}

type Main = {
  M100: string
  M040: string
}

type Secondary = {
  S100: string
  S040: string
  gradient: string
}

type Red = {
  R100: string
  R040: string
}

type Yellow = {
  Y100: string
  Y040: string
}

type Green = {
  G100: string
  G040: string
}

type Opacity = {
  O010: string
  O000: string
  transparent: string
}


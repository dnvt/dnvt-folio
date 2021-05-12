type Font = {
  primary: string
  secondary: string
  hover: string
  active: string
  visited: string
  tooltip: string
}

type Background = {}

type Colors = {
  LIGHT: Theme
  DARK: Theme
}

interface Theme {
  text: Font
  background: Background
}

export const THEME: Colors = {
  LIGHT: {
    text: {
      primary: "#24292E",
      secondary: "string",
      hover: "string",
      active: "string",
      visited: "string",
      tooltip: "string",
    },
    background: {}
  },
  DARK: {
    text: {
      primary: "#24292E",
      secondary: "string",
      hover: "string",
      active: "string",
      visited: "string",
      tooltip: "string",
    },
    background: {}
  }
}


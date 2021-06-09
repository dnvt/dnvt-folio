import { LIGHT, DARK } from "./base"

// Do not change the colors here
// They need to be changed at the root of colors
// in ./src/utils/base.tsx

export interface Theme {
  text: Font
  background: Background
  border: Border
  grid: Grid
  alert: Alert
  constant: Constant
  shadow: Shadow
  projects: Projects
}

// THEME Color Object
export const THEME: Colors = {
  // Light theme
  light: {
    text: {
      primary: LIGHT.slate.S070,
      secondary: LIGHT.slate.S060,
      hover: LIGHT.main.M100,
      active: LIGHT.secondary.S100,
      visited: LIGHT.secondary.S040,
      tooltip: LIGHT.slate.S000,
      hero: LIGHT.secondary.gradient
    },
    background: {
      hover: LIGHT.slate.S040,
      basic: LIGHT.slate.S020,
      tint: LIGHT.slate.S010,
      default: LIGHT.slate.S000,
      empty: LIGHT.opacity.O010,
      transparent: LIGHT.opacity.transparent,
      tooltip: LIGHT.slate.S090
    },
    border: {
      outline: LIGHT.opacity.O010,
      transparent: LIGHT.opacity.O000
    },
    grid: {
      text: LIGHT.main.M100,
      fill: LIGHT.main.M040,
      outline: LIGHT.main.M040,
      verticalGrid: LIGHT.main.M015,
      horizontalGrid: LIGHT.secondary.S020,
    },
    alert: {
      error: LIGHT.red.R100,
      warning: LIGHT.yellow.Y100,
      valid: LIGHT.green.G100,
    },
    constant: {
      black: LIGHT.slate.S100,
      white: LIGHT.slate.S000
    },
    shadow: {
      device:
        "0 100px 50px 0 rgba(0,0,0,0.07), 0 50px 40px 0 rgba(0,0,0,0.05), 0 30px 24px 0 rgba(0,0,0,0.05), 0 19px 15px 0 rgba(0,0,0,0.04), 0 12px 4px 0 rgba(0,0,0,0.04), 0 7px 6px 0 rgba(0,0,0,0.03), 0 4px 3px 0 rgba(0,0,0,0.02), 0 2px 1px 0 rgba(0,0,0,0.02), 0px 0px 0px 1px rgba(25,25,25,.1)",
    },
    projects: {
      usmobile: { text: "#667AF4", background: "#EEFAF4", hover: "#def5e9", },
      stars: { text: LIGHT.slate.S070 },
      mimi: { text: LIGHT.slate.S090, background: "#5ED0B0", hover: "#4AC6A5" },
      love: { text: "#38CB7E" },
      norse: { text: "#787A8D" },
      elastic: { text: "#E16B2D" },
      kipfit: { text: "#D73951" }
    }
  },

  // Dark theme
  dark: {
    text: {
      primary: DARK.slate.S090,
      secondary: DARK.slate.S070,
      hover: DARK.main.M100,
      active: DARK.secondary.S100,
      visited: DARK.secondary.S040,
      tooltip: DARK.slate.S010,
      hero: DARK.secondary.gradient
    },
    background: {
      hover: DARK.slate.S040,
      basic: DARK.slate.S020,
      tint: DARK.slate.S060,
      default: DARK.slate.S000,
      empty: DARK.opacity.O010,
      transparent: DARK.opacity.transparent,
      tooltip: DARK.slate.S100
    },
    border: {
      outline: DARK.opacity.O010,
      transparent: DARK.opacity.O000
    },
    grid: {
      text: DARK.main.M100,
      fill: DARK.main.M040,
      outline: DARK.main.M040,
      verticalGrid: DARK.secondary.S020,
      horizontalGrid: DARK.main.M040,
    },
    alert: {
      error: DARK.red.R100,
      warning: DARK.yellow.Y100,
      valid: DARK.green.G100,
    },
    constant: {
      black: DARK.slate.S000,
      white: DARK.slate.S100
    },
    shadow: {
      device:
        "0px -100px 50px rgba(80, 11, 241, 0.07), 0px -50px 250px rgba(80, 11, 241, 0.053), 0px -30.1px 24.1px rgba(80, 11, 241, 0.046), 0px -19.3px 15.5px rgba(80, 11, 241, 0.04), 0px -12px 4px rgba(80, 11, 241, 0.035), 0px -7.9px 6.3px rgba(80, 11, 241, 0.03), 0px -4.5px 3.6px rgba(80, 11, 241, 0.024), 0px -2px 1.6px rgba(80, 11, 241, 0.017)",
    },
    projects: {
      usmobile: { text: "#78C58E", background: "#192E23", hover: "#234232" },
      mimi: { text: DARK.slate.S090, background: "#5ED0B0", hover: "#4AC6A5" },
      stars: { text: DARK.slate.S090 },
      love: { text: "#38CB7E" },
      norse: { text: "#787A8D" },
      elastic: { text: "#E16B2D" },
      kipfit: { text: "#D73951" }
    }
  },
}

// Object types
type Font = {
  primary: string
  secondary: string
  hover: string
  active: string
  visited: string
  tooltip: string
  hero: string
}

type Background = {
  hover: string
  basic: string
  tint: string
  default: string
  empty: string
  transparent: string
  tooltip: string
}

type Border = {
  outline: string
  transparent: string
}

type Grid = {
  text: string
  fill: string
  outline: string
  verticalGrid: string
  horizontalGrid: string
}
type Alert = {
  error: string
  warning: string
  valid: string
}

type Constant = {
  black: string
  white: string
}

type Shadow = {
  device: string
}

type Colors = {
  light: Theme
  dark: Theme
}

type Usmobile = {
  text: string
  hover: string
  background: string
}

type Stars = {
  text: string
}

type Mimi = {
  text: string
  hover: string
  background: string
}

type Norse = {
  text: string
}

type Elastic = {
  text: string
}

type Love = {
  text: string
}

type Kipfit = {
  text: string
}

type Projects = {
  usmobile: Usmobile
  norse: Norse
  elastic: Elastic
  love: Love
  kipfit: Kipfit
  mimi: Mimi
  stars: Stars
}
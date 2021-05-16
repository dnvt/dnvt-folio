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
      default: DARK.slate.S010,
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
      verticalGrid: DARK.secondary.S015,
      horizontalGrid: DARK.main.M020,
    },
    alert: {
      error: DARK.red.R100,
      warning: DARK.yellow.Y100,
      valid: DARK.green.G100,
    },
    constant: {
      black: DARK.slate.S000,
      white: DARK.slate.S100
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
  transparent: string
  tooltip: string
}

type Border = {
  outline: string
  transparent: string
}

// TODO
// type Projects = {}

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

type Colors = {
  light: Theme
  dark: Theme
}

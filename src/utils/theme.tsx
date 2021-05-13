import { LIGHT, DARK } from "./base"

// Do not change the colors here
// They need to be changed at the root of colors
// in ./src/utils/base.tsx

interface Theme {
  text: Font
  background: Background
  border: Border
  alert: Alert
  constant: Constant
}

// THEME Color Object
export const THEME: Colors = {
  // Light theme
  light: {
    text: {
      primary: LIGHT.slate.S90,
      secondary: LIGHT.slate.S70,
      hover: LIGHT.main.M99,
      active: LIGHT.secondary.S99,
      visited: LIGHT.secondary.S40,
      tooltip: LIGHT.slate.S00,
      hero: LIGHT.secondary.gradient
    },
    background: {
      hover: LIGHT.slate.S30,
      basic: LIGHT.slate.S20,
      tint: LIGHT.slate.S10,
      default: LIGHT.slate.S00,
      transparent: LIGHT.opacity.transparent,
      tooltip: LIGHT.slate.S99
    },
    border: {
      outline: LIGHT.opacity.O10,
      transparent: LIGHT.opacity.O00
    },
    alert: {
      error: LIGHT.red.R99,
      warning: LIGHT.yellow.Y99,
      valid: LIGHT.green.G99,
    },
    constant: {
      black: LIGHT.slate.S99,
      white: LIGHT.slate.S00
    }
  },
  // Dark theme
  dark: {
    text: {
      primary: DARK.slate.S90,
      secondary: DARK.slate.S70,
      hover: DARK.main.M99,
      active: DARK.secondary.S99,
      visited: DARK.secondary.S40,
      tooltip: DARK.slate.S00,
      hero: DARK.secondary.gradient
    },
    background: {
      hover: DARK.slate.S30,
      basic: DARK.slate.S20,
      tint: DARK.slate.S10,
      default: DARK.slate.S00,
      transparent: DARK.opacity.transparent,
      tooltip: DARK.slate.S99
    },
    border: {
      outline: DARK.opacity.O10,
      transparent: DARK.opacity.O00
    },
    alert: {
      error: DARK.red.R99,
      warning: DARK.yellow.Y99,
      valid: DARK.green.G99,
    },
    constant: {
      black: DARK.slate.S99,
      white: DARK.slate.S00
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
  outline: string,
  transparent: string,
}

// TODO
// type Projects = {}

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